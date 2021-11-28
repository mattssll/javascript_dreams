const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting one
router.get('/:id/', getSubscriber, (req, res) => { // using middleware
  res.send(res.subscriber)
})

// Creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
      name: req.body.name,
      subscribedToChannel: req.body.subscribedToChannel
    })
    try {
      const newSubscriber = await subscriber.save()
      res.status(201).json(newSubscriber)
    } 
    catch(err) {
      res.status(400).json({ message: err.message })
  }
})

// Updating one
router.patch('/:id', getSubscriber, async (req, res) => {
  req.body?.name ? res.subscriber.name = req.body.name : res.subscriber.name=null
  req.body?.subscribedToChannel ? res.subscriber.subscribedToChannel = req.body.subscribedToChannel : res.subscriber.subscribedToChannel=null
  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (err) {
    res.status(400).json({ message : err.message })
  }
    return 
})

// Deleting one
router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({ message: `deleted subscriber with id ${req.params.id}`})
  } catch (err) {
    res.status(500).json({ message: err.message })
  }

})

async function getSubscriber(req, res, next) { // next is a callback when middleware is done
  let subscriber
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ message: 'Could not find the subscriber, invalid mongo _id format'})    }
    subscriber = await Subscriber.findById(req.params.id)
    
    if (subscriber==null) {
      return res.status(404).json({ message: 'Could not find the subscriber'})
    }
  } catch(err) {
    return res.status(500).json({ message : err.message })
  }
  res.subscriber = subscriber // creating a variable in the response object, this will be called inside our routes
  next() // goes to next piece of middleware or to request itself
}

module.exports = router
