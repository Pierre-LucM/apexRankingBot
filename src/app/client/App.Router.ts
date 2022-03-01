import {Router} from 'express';
import {ApexScraper}from '../../apexScraper/ApexScraper';
const router = Router();

/* GET home page. */
router.get('/:region/:id', async function(req, res, next) {
    console.log(req.url.split('/'));
    res.status(200).send(await new ApexScraper().playerDataRetrieve({playerName:req.url.split('/')[2], platform:req.url.split('/')[1]}));
});

export default router;