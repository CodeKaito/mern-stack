const express = require('express');
const {
    createWorkout, 
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/WorkoutController');

const router = express.Router();

router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a new workout
router.delete('/:id', deleteWorkout);

// UPDATE a new workout
router.patch('/:id', updateWorkout);

module.exports = router;