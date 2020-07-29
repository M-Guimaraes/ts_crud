import { Router, Request, Response } from 'express';

const router: Router = Router();

import { indexController } from '../controllers';


router.get('/', indexController.index);

router.get('/add', (req: Request, res: Response) => {
	res.send('Form');
});
router.get('/about', (req: Request, res: Response) => res.render('about'));

export default router;
