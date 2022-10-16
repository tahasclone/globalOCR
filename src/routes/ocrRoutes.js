import {scanNewCard} from '../controllers/ocrController';

const routes = (app) => {
    app.route('/scanCard')
      .post(scanNewCard)
  }
  export default routes;