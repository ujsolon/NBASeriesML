---
title: "Linear Regression Gives Thunder 70% Edge Over Pacers in Game 7"
excerpt: "A linear regression on past Game 7 point margins gives OKC around 70% chance of beating Indiana and taking home the championship"
coverImage: "/assets/blog/okc_indiana_22jun2025/nba1.png"
date: "2025-06-22T08:30:00.000Z"
author:
  name: Ulyses Solon
  picture: "/assets/blog/authors/uj.jpg"
ogImage:
  url: "/assets/blog/okc_indiana_22jun2025/nba1.png"
---

_(working document, AI-generated images in-use)_

## Quick Overview

This analysis is part of [**NBASeriesML**](https://github.com/ujsolon/NBASeriesML), a machine learning project designed to predict the outcomes of NBA Game 7 matchups using historical data. By training a linear regression model via gradient descent on point differentials from 147 past Game 7s, the system identifies patterns that correlate with victory. In the previous [**Celtics vs. Heat 2023 series**](https://nbaml.vercel.app/posts/boston_miami_30may2023), the model converged after 150 iterations and predicted a narrow win probability for Miami at 55%.

The current matchup between the Oklahoma City Thunder and Indiana Pacers is evaluated using the same model, which now forecasts a **71% chance of victory for Oklahoma based on their series point margins**. This data-driven approach underscores how statistical modeling can enrich understanding and forecasting in high-stakes playoff basketball.

## Series Background
1. Game1: 110-111 = -1
2. Game2: 123-107 = 16
3. Game3: 107-116 = -9
4. Game4: 111-104 = 7
5. Game5: 120-109 = 11
6. Game6: 91-108 = -17

## Input Data

Raw data from [**Basketball Reference**](https://www.basketball-reference.com/playoffs/series.html) is downloaded and initially processed in [**NBASeriesResults.csv**](https://github.com/ujsolon/NBASeriesML/blob/main/NBASeriesML/NBASeriesResults.csv). The data is then filtered and prepared for use in the machine learning model, as detailed in [**NBA_ML.ipynb**](https://github.com/ujsolon/NBASeriesML/blob/main/NBASeriesML/NBA_ML_v2.ipynb). The processed input data can be accessed via [**NBAinput.csv**](https://github.com/ujsolon/NBASeriesML/blob/main/NBASeriesML/NBAinput.csv).

## Methodology

### Data Preprocessing

The methodology begins with loading and preprocessing NBA game data from a CSV file:

1. **Data Loading**: Game data is read from `NBAinput.csv` using Python's CSV reader
2. **Header Removal**: Column headers are removed from the dataset
3. **Data Type Conversion**: String values are converted to integers for numerical processing
4. **Feature-Target Separation**: The last column becomes the target variable, remaining columns become features
5. **Array Conversion**: Features and targets are converted to NumPy arrays for efficient computation

### Model Initialization

The logistic regression model is initialized with:
- **Weights (`w`)**: A 6-dimensional vector initialized with random values from a normal distribution, scaled by 10
- **Bias (`b`)**: Set to 0.5 as the initial value
- **Feature Dimensionality**: The model expects 6 features (corresponding to 6 games in the series)

### Training Algorithm

The model uses **batch gradient descent** for optimization:

### Gradient Descent Implementation
- **Learning Rate (`alpha`)**: Set to 0.01 to control the step size during parameter updates
- **Iterations**: 500 iterations for convergence
- **Cost Function**: Logistic cost function (cross-entropy loss)
- **Gradient Computation**: Uses `compute_gradient_logistic()` to calculate partial derivatives
- **Parameter Updates**:
  - `w = w - alpha * dj_dw` (weight updates)
  - `b = b - alpha * dj_db` (bias updates)

### Training Process
1. **Iterative Optimization**: For each iteration, the algorithm:
   - Computes gradients using current parameters
   - Updates weights and bias using the gradients
   - Records the cost for monitoring convergence
2. **Progress Monitoring**: Cost is printed every 10% of total iterations to track training progress
3. **History Tracking**: Cost values are stored in `J_history` for analysis (limited to 100,000 entries to prevent memory issues)

## Prediction Process

After training, the model makes predictions using:
1. **Linear Combination**: Computes `np.dot(x, w_out) + b_out` where `x` is the input feature vector
2. **Sigmoid Activation**: Applies the sigmoid function to convert the linear output to a probability between 0 and 1
3. **Interpretation**: The resulting probability represents the likelihood of the team winning (values > 0.5 indicate a predicted win)

## Model Application

The trained model is applied to the current series data:
- **Input Vector**: `x = [-1, 16, -9, 7, 11, -17]` representing point differentials for Games 1-6
- **Output**: A probability score indicating the likelihood of Oklahoma City Thunder winning Game 7
- **Decision Threshold**: Probabilities above 0.5 are interpreted as a predicted win for the team

This methodology implements a classical supervised learning approach using logistic regression with gradient descent optimization, specifically tailored for binary classification of NBA Game 7 outcomes based on historical point differential patterns.

### Results and Discussion

With a learning rate of 0.01, our model converges at around 150 iterations, giving weights w=[0.03, 0.03, 0.01,0, 0.03,-0.01], and bias factor b=0.
Applying the model to the current point differences of x = [-1, 16, -9, 7, 11, -17], sigmoid(w*x+b) = 0.7097, which I interpret to be a **win for Oklahoma, 71% of the time.**

Feedback? Contact me: [ujsolon.com](https://ujsolon.com/).


