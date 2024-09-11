import { Router } from 'express';
import { getUsers, addUser } from '../Controllers/userControllers';

const router = Router();

router.get('/users', getUsers);
router.post('/users', addUser);

export default router;