import { Router } from "express";
import {createTask, getTasks, getUsersTasks, updateTasksStatus } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status",updateTasksStatus);
router.get("/user/:userId", getUsersTasks);


export default router;