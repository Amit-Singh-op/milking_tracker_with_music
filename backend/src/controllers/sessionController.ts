import { Request, Response } from "express";
import Session, { ISession } from "../models/sessionModel";

// @desc   Get all milking sessions
// @route  GET /api/sessions
export const getSessions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const sessions: ISession[] = await Session.find().sort({ date: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc   Create a new milking session
// @route  POST /api/sessions
export const createSession = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { date, startTime, endTime, duration, milkCollected } = req.body;

  if (!date || !startTime || !endTime || !duration || !milkCollected) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const newSession: ISession = await Session.create({
      date,
      startTime,
      endTime,
      duration,
      milkCollected,
    });
    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
