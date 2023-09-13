async function finestFoodOutlet(city, votes) {
  const restaurants = [];
  const moreVotes = [];
  const answer = [];

  try {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}`
    );
    const result = await response.json();
    result.data.forEach((rest) => {
      restaurants.push(rest);
    });
    if (result.page < result.total_pages) {
      for (let i = 2; i <= result.total_pages; i++) {
        const response2 = await fetch(
          `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${i}`
        );
        const result2 = await response2.json();
        result2.data.forEach((rest) => {
          restaurants.push(rest);
        });
      }
    }
    restaurants.forEach((rest) => {
      if (rest.user_rating.votes >= votes) {
        moreVotes.push(rest);
      }
    });
    answer.push(moreVotes[0]);
    moreVotes.forEach((restaurant) => {
      if (
        restaurant.user_rating.average_rating >=
          answer[0].user_rating.average_rating &&
        restaurant.user_rating.votes > answer[0].user_rating.votes
      ) {
        answer.pop();
        answer.push(restaurant);
      }
    });
    return answer[0].name;
  } catch (err) {
    console.error(err);
  }
}
