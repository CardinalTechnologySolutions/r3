import { RatingAndReviewPage } from './app.po';

describe('rating-and-review App', () => {
  let page: RatingAndReviewPage;

  beforeEach(() => {
    page = new RatingAndReviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
