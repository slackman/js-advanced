import { Task } from './task.js'
import { User } from './user.js'

const task = new Task('Task 1');
const user = new User(task);
user.do();