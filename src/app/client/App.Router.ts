import {Router} from 'express';
import {ApexScraper}from '../../apexScraper/ApexScraper';
const router = Router();

/* GET home page. */
router.get('/:region/:id?', async function(req, res, next) {
    console.log(req);
    res.status(200).send(await new ApexScraper().playerDataRetrieve({playerName:req.params.id, platform:req.params.region,respawnPoint:req.query.rp===undefined?"false":req.query.rp as string}));
});

export default router;