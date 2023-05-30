# NBASeriesML
## Machine learning algorithm says 55% in favor of Miami

In the dynamic and competitive realm of professional basketball, predicting the outcome of crucial playoff matchups is an intriguing challenge. The thrilling nature of a Game 7 showdown adds an extra layer of excitement and uncertainty. With the advent of machine learning and its application to sports analytics, it has become possible to leverage data-driven approaches to gain insights into the likely victor of a highly anticipated series.

In this study, we delve into the task of predicting the winner of the Boston Celtics (BOS) versus Miami Heat (MIA) Game 7 matchup. We employ a gradient descent method for linear regression to teach our model the results of 147 previous game 7 s, considering only the point differences between the two playing teams, and nothing else.

Result:

With a learning rate of 0.01, our model converges at around 150 iterations, giving weights w=[0.03, 0.03, 0.01,0, 0.03,-0.01], and bias factor b=0.
Applying the model to the current point differences of x = [7, 6, 26, -17, -13, -1], sigmoid(w*x+b) = 0.5476, which I interpret to be a win for Miami, 55% of the time.
Game1: 123-116 = 7
Game2: 111-105 = 6
Game3: 128-102 = 26
Game4: 99-116 = -17
Game5: 97-110 = -13
Game6: 103-104 = -1
Feedback? Contact me: https://ujsolon.com/
