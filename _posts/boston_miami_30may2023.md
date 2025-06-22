---
title: "Boston Celtics vs. Miami Heat - 2023 Playoffs East Finals"
excerpt: "Using linear regression on historical Game 7 point spreads, our model gives the Miami Heat a 55% chance to win over Boston."
coverImage: "/assets/blog/boston_miami_30may2023/nba1.jpg"
date: "2023-05-30T08:30:00.000Z"
author:
  name: Ulyses Solon
  picture: "/assets/blog/authors/uj.jpg"
ogImage:
  url: "/assets/blog/boston_miami_30may2023/nba1.jpg"
---

# NBASeriesML: Predicting Game 7 Outcomes in NBA Playoffs

**NBASeriesML** utilizes machine learning to predict the outcome of NBA Game 7 matchups, focusing on the Boston Celtics vs. Miami Heat 2023 Playoffs East Finals series. The model, trained using gradient descent for linear regression on point differences from 147 previous Game 7s, converged after 150 iterations with a prediction favoring Miami at 55%. This approach highlights the power of data-driven sports analytics in forecasting game outcomes. The project demonstrates how machine learning can enhance understanding and strategy formulation in professional basketball.

### Introduction
In the dynamic and competitive realm of professional basketball, predicting the outcome of crucial playoff matchups is an intriguing challenge. The thrilling nature of a Game 7 showdown adds an extra layer of excitement and uncertainty. With the advent of machine learning and its application to sports analytics, it has become possible to leverage data-driven approaches to gain insights into the likely victor of a highly anticipated series.

In this study, we delve into the task of predicting the winner of the Boston Celtics (BOS) versus Miami Heat (MIA) Game 7 matchup. We employ a gradient descent method for linear regression to teach our model the results of 147 previous game 7 s, considering only the point differences between the two playing teams, and nothing else.

### Result:

With a learning rate of 0.01, our model converges at around 150 iterations, giving weights w=[0.03, 0.03, 0.01,0, 0.03,-0.01], and bias factor b=0.
Applying the model to the current point differences of x = [7, 6, 26, -17, -13, -1], sigmoid(w*x+b) = 0.5476, which I interpret to be a win for Miami, 55% of the time.
1. Game1: 123-116 = 7
2. Game2: 111-105 = 6
3. Game3: 128-102 = 26
4. Game4: 99-116 = -17
5. Game5: 97-110 = -13
6. Game6: 103-104 = -1

Feedback? Contact me: [ujsolon.com](https://ujsolon.com/).

## Images

![nba1.jpg](public\assets\blog\boston_miami_30may2023\nba1.jpg "Miami is favored ay 55%")
![nba1.jpg](public\assets\blog\boston_miami_30may2023\nba2.jpg "Previous 150 series starting 3-0 results in a win for the leading team.")
![nba1.jpg](public\assets\blog\boston_miami_30may2023\nba3.jpg "Winner of games 1, 2 and 5 correlates to a game 7 win.")


## Input Data

Raw data from Basketball Reference ([link](https://www.basketball-reference.com/playoffs/series.html)) is downloaded and initially processed in [NBAinput.csv](https://github.com/ujsolon/NBASeriesML/blob/main/NBAinput.csv). The data is then filtered and prepared for use in the machine learning model, as detailed in [NBA_ML.ipynb](https://github.com/ujsolon/NBASeriesML/blob/main/NBA_ML.ipynb). The processed input data can be accessed [here](https://github.com/ujsolon/NBASeriesML/blob/main/NBAinput.csv).
