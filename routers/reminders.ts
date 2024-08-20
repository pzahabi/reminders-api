import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/Reminder";

const router = Router();
let reminders: Reminder[] = [];

router.get('/', (req, res) => {
    res.send(reminders);
});


router.post('/', (req, res) => {
    const {title} = req.body as CreateReminderDto;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).json(reminder);
});

router.delete('/:id', (req, res) => {
    const reminder = reminders.find( reminder => reminder.id === parseInt(req.params.id));
    if(!reminder) res.status(404).send("The reminder with the given ID was not found!");
    reminders = reminders.filter(reminder => reminder.id !== parseInt(req.params.id));
    res.send(reminders);
});

export default router;