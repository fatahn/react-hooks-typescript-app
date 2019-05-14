import React, { useState } from 'react';
import FeedsPricePerBag from '../FeedsPricePerBag';

const FeedsColumn = () => {
  const [feeds, setFeeds] = useState({
    starterFeed: false,
    growerFeed: false,
    finisherFeed: false,
  })

  const onChange = (e) => setFeeds({
		...feeds,
    [e.target.name]: e.target.checked,
  });

  return (
    <div className="columns is-mobile">
      <div className="column">
        <h4 className="title is-4">Feeds Cost</h4>
        <div className="container">
          <div className="field">
            <input
              className="is-checkradio"
              id="starterFeed"
              type="checkbox"
              name="starterFeed"
              value={feeds.starterFeed}
              onChange={onChange}
            />
            <label htmlFor="starterFeed">Starter</label>
						{
							feeds.starterFeed ? <FeedsPricePerBag /> : null
						}
          </div>
          <div className="field">
            <input
              className="is-checkradio"
              id="growerFeed"
              type="checkbox"
              name="growerFeed"
              value={feeds.growerFeed}
              onChange={onChange}
            />
            <label htmlFor="growerFeed">Grower</label>
						{
							feeds.growerFeed ? <FeedsPricePerBag /> : null
						}
          </div>
          <div className="field">
            <input
              className="is-checkradio"
              id="finisherFeed"
              type="checkbox"
              name="finisherFeed"
              value={feeds.finisherFeed}
              onChange={onChange}
            />
            <label htmlFor="finisherFeed">Finisher</label>
						{
							feeds.finisherFeed ? <FeedsPricePerBag /> : null
						}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedsColumn;
