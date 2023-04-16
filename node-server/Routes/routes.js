import express from 'express';
import { addCus,allCus,deleteUser,getCus,editUser } from '../Controler/Controler.js';


const router = express.Router();


router.post('/add',addCus)
router.get('/all',allCus)
router.get('/:_id',getCus)
router.post('/:_id',editUser)
router.delete('/:_id',deleteUser)


export default router;