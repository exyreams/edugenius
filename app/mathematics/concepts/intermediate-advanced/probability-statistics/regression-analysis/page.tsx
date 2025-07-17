"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function RegressionAnalysis() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate-Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Probability & Statistics",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics",
    },
    {
      label: "Regression Analysis",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/regression-analysis",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Regression Analysis</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Regression analysis is a statistical method used to examine the relationship between one dependent variable (response variable) and one or more independent variables (predictor variables). It helps us understand how the typical value of the dependent variable changes when any one of the independent variables is varied.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Types of Regression</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Simple Linear Regression:</strong> One independent variable</li>
          <li><strong>Multiple Linear Regression:</strong> Multiple independent variables</li>
          <li><strong>Polynomial Regression:</strong> Non-linear relationships using polynomial terms</li>
          <li><strong>Logistic Regression:</strong> Binary or categorical dependent variables</li>
          <li><strong>Non-linear Regression:</strong> Non-linear relationships between variables</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Simple Linear Regression</h2>
        <p className="mb-4">
          Simple linear regression models the relationship between two variables using a straight line.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Model Equation</h3>
            <BlockMath math="Y = \beta_0 + \beta_1 X + \varepsilon" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="Y" /> = dependent variable (response)</li>
              <li><InlineMath math="X" /> = independent variable (predictor)</li>
              <li><InlineMath math="\beta_0" /> = y-intercept (constant term)</li>
              <li><InlineMath math="\beta_1" /> = slope (regression coefficient)</li>
              <li><InlineMath math="\varepsilon" /> = error term (residual)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Estimated Regression Line</h3>
            <BlockMath math="\hat{Y} = \hat{\beta}_0 + \hat{\beta}_1 X" />
            
            <p className="mb-2">Where <InlineMath math="\hat{Y}" /> is the predicted value of Y.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Least Squares Method</h2>
        <p className="mb-4">
          The method of least squares finds the best-fitting line by minimizing the sum of squared residuals.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Slope Coefficient</h3>
            <BlockMath math="\hat{\beta}_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2} = \frac{S_{xy}}{S_{xx}}" />
            
            <p className="mb-2">Alternative formula:</p>
            <BlockMath math="\hat{\beta}_1 = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Intercept</h3>
            <BlockMath math="\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Residuals</h3>
            <BlockMath math="e_i = y_i - \hat{y}_i = y_i - (\hat{\beta}_0 + \hat{\beta}_1 x_i)" />
            
            <p className="mb-2">The sum of residuals equals zero: <InlineMath math="\sum e_i = 0" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Measures of Fit</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Coefficient of Determination (R²)</h3>
            <BlockMath math="R^2 = \frac{SSR}{SST} = \frac{\sum (\hat{y}_i - \bar{y})^2}{\sum (y_i - \bar{y})^2} = 1 - \frac{SSE}{SST}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>SST = Total Sum of Squares = <InlineMath math="\sum (y_i - \bar{y})^2" /></li>
              <li>SSR = Regression Sum of Squares = <InlineMath math="\sum (\hat{y}_i - \bar{y})^2" /></li>
              <li>SSE = Error Sum of Squares = <InlineMath math="\sum (y_i - \hat{y}_i)^2" /></li>
            </ul>
            
            <p className="mb-2">Interpretation: R² represents the proportion of variance in Y explained by X</p>
            <p className="mb-2">Range: 0 ≤ R² ≤ 1</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Correlation Coefficient</h3>
            <BlockMath math="r = \pm\sqrt{R^2} = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}" />
            
            <p className="mb-2">The sign of r is the same as the sign of <InlineMath math="\hat{\beta}_1" /></p>
            <p className="mb-2">Range: -1 ≤ r ≤ 1</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Error of Regression</h3>
            <BlockMath math="s_e = \sqrt{\frac{SSE}{n-2}} = \sqrt{\frac{\sum (y_i - \hat{y}_i)^2}{n-2}}" />
            
            <p className="mb-2">This measures the typical size of the residuals</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Statistical Inference in Regression</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Assumptions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Linearity: The relationship between X and Y is linear</li>
              <li>Independence: Observations are independent</li>
              <li>Homoscedasticity: Constant variance of residuals</li>
              <li>Normality: Residuals are normally distributed</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Error of Slope</h3>
            <BlockMath math="SE(\hat{\beta}_1) = \frac{s_e}{\sqrt{S_{xx}}} = \frac{s_e}{\sqrt{\sum (x_i - \bar{x})^2}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Error of Intercept</h3>
            <BlockMath math="SE(\hat{\beta}_0) = s_e \sqrt{\frac{1}{n} + \frac{\bar{x}^2}{S_{xx}}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">t-test for Slope</h3>
            <p className="mb-2">To test H₀: β₁ = 0 vs H₁: β₁ ≠ 0</p>
            <BlockMath math="t = \frac{\hat{\beta}_1 - 0}{SE(\hat{\beta}_1)} \sim t_{n-2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Confidence Interval for Slope</h3>
            <BlockMath math="\hat{\beta}_1 \pm t_{\alpha/2, n-2} \times SE(\hat{\beta}_1)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Prediction and Confidence Intervals</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Point Prediction</h3>
            <p className="mb-2">For a given value x₀:</p>
            <BlockMath math="\hat{y}_0 = \hat{\beta}_0 + \hat{\beta}_1 x_0" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Confidence Interval for Mean Response</h3>
            <p className="mb-2">Confidence interval for E[Y|X = x₀]:</p>
            <BlockMath math="\hat{y}_0 \pm t_{\alpha/2, n-2} \times s_e \sqrt{\frac{1}{n} + \frac{(x_0 - \bar{x})^2}{S_{xx}}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Prediction Interval for Individual Response</h3>
            <p className="mb-2">Prediction interval for a new observation Y₀:</p>
            <BlockMath math="\hat{y}_0 \pm t_{\alpha/2, n-2} \times s_e \sqrt{1 + \frac{1}{n} + \frac{(x_0 - \bar{x})^2}{S_{xx}}}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Multiple Linear Regression</h2>
        <p className="mb-4">
          Multiple regression extends simple regression to include multiple predictor variables.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Model Equation</h3>
            <BlockMath math="Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \cdots + \beta_k X_k + \varepsilon" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Matrix Form</h3>
            <BlockMath math="\mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}" />
            
            <p className="mb-2">Least squares solution:</p>
            <BlockMath math="\hat{\boldsymbol{\beta}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{Y}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Adjusted R²</h3>
            <BlockMath math="R_{adj}^2 = 1 - \frac{(1-R^2)(n-1)}{n-k-1}" />
            
            <p className="mb-2">Where k is the number of predictor variables</p>
            <p className="mb-2">Adjusted R² accounts for the number of predictors in the model</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">F-test for Overall Significance</h3>
            <p className="mb-2">To test H₀: β₁ = β₂ = ... = βₖ = 0</p>
            <BlockMath math="F = \frac{MSR}{MSE} = \frac{SSR/k}{SSE/(n-k-1)} \sim F_{k, n-k-1}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Residual Analysis</h2>
        <p className="mb-4">
          Residual analysis helps validate regression assumptions and identify potential problems.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Types of Residuals</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Raw Residuals:</strong> <InlineMath math="e_i = y_i - \hat{y}_i" /></li>
              <li><strong>Standardized Residuals:</strong> <InlineMath math="r_i = \frac{e_i}{s_e}" /></li>
              <li><strong>Studentized Residuals:</strong> <InlineMath math="t_i = \frac{e_i}{s_e\sqrt{1-h_{ii}}}" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Diagnostic Plots</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Residuals vs Fitted Values (check homoscedasticity)</li>
              <li>Normal Q-Q Plot (check normality)</li>
              <li>Residuals vs Predictor Variables (check linearity)</li>
              <li>Residuals vs Order (check independence)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Outliers and Influential Points</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Leverage:</strong> <InlineMath math="h_{ii}" /> (diagonal elements of hat matrix)</li>
              <li><strong>Cook's Distance:</strong> Measures influence of each observation</li>
              <li><strong>DFFITS:</strong> Measures change in fitted values</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Simple Linear Regression</h3>
          <p className="mb-2">A study examines the relationship between hours studied (X) and exam score (Y). Data for 5 students:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Hours (X)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Score (Y)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">XY</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">X²</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Y²</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">65</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">65</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">4225</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">70</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">140</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">4</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">4900</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">3</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">75</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">225</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">9</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5625</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">4</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">80</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">320</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">16</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">6400</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">85</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">425</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">25</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">7225</td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Σ = 15</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Σ = 375</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Σ = 1175</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Σ = 55</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Σ = 28375</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">Calculations:</p>
          <p className="mb-2"><InlineMath math="\bar{x} = 15/5 = 3, \bar{y} = 375/5 = 75" /></p>
          
          <p className="mb-2">Slope:</p>
          <BlockMath math="\hat{\beta}_1 = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2} = \frac{5(1175) - (15)(375)}{5(55) - (15)^2} = \frac{5875 - 5625}{275 - 225} = \frac{250}{50} = 5" />
          
          <p className="mb-2">Intercept:</p>
          <BlockMath math="\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x} = 75 - 5(3) = 60" />
          
          <p className="mb-2">Regression equation:</p>
          <BlockMath math="\hat{Y} = 60 + 5X" />
          
          <p className="mb-2">Coefficient of determination:</p>
          <BlockMath math="R^2 = \frac{[n\sum xy - \sum x \sum y]^2}{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]} = \frac{(250)^2}{(50)(28375 \times 5 - 375^2)} = \frac{62500}{(50)(1250)} = 1.0" />
          
          <p>Perfect linear relationship! For each additional hour studied, the score increases by 5 points.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Hypothesis Testing</h3>
          <p className="mb-2">Using the data from Example 1, test if there's a significant relationship between hours studied and exam score at α = 0.05.</p>
          
          <p className="mb-2">Hypotheses:</p>
          <p className="mb-1">H₀: β₁ = 0 (no relationship)</p>
          <p className="mb-2">H₁: β₁ ≠ 0 (significant relationship)</p>
          
          <p className="mb-2">Since R² = 1, all variation is explained by the regression, so SSE = 0</p>
          <p className="mb-2">This means the relationship is perfectly linear with no error.</p>
          
          <p>In practice, with real data, you would calculate the t-statistic and compare it to the critical value.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Prediction</h3>
          <p className="mb-2">Using the regression equation from Example 1, predict the exam score for a student who studies 3.5 hours.</p>
          
          <BlockMath math="\hat{y} = 60 + 5(3.5) = 60 + 17.5 = 77.5" />
          
          <p>The predicted exam score is 77.5 points.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Multiple Regression Interpretation</h3>
          <p className="mb-2">A multiple regression model predicting house price (in $1000s) gives:</p>
          <BlockMath math="\hat{Y} = 50 + 0.1X_1 + 15X_2" />
          
          <p className="mb-2">Where:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>X₁ = square footage</li>
            <li>X₂ = number of bedrooms</li>
          </ul>
          
          <p className="mb-2">Interpretation:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Base price: $50,000</li>
            <li>Each additional square foot adds $100 to the price (holding bedrooms constant)</li>
            <li>Each additional bedroom adds $15,000 to the price (holding square footage constant)</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 5: Model Comparison</h3>
          <p className="mb-2">Compare two models for predicting student GPA:</p>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold">Model 1: GPA = β₀ + β₁(Study Hours)</h4>
              <p>R² = 0.64, Adjusted R² = 0.62</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Model 2: GPA = β₀ + β₁(Study Hours) + β₂(Class Attendance) + β₃(Sleep Hours)</h4>
              <p>R² = 0.78, Adjusted R² = 0.74</p>
            </div>
          </div>
          
          <p className="mt-4">Model 2 is better because:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Higher R² (explains more variance)</li>
            <li>Higher adjusted R² (accounts for additional predictors)</li>
            <li>The increase in adjusted R² suggests the additional variables are meaningful</li>
          </ul>
        </div>
      </div>
    </div>
  );
}