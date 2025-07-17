"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function CorrelationAndRegression() {
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
      label: "Correlation and Regression",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/correlation-and-regression",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Correlation and Regression</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Correlation and regression are statistical methods used to analyze the relationship between two or more variables. While correlation measures the strength and direction of a relationship, regression provides a mathematical equation to predict one variable based on another.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-3">Aspect</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Correlation</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Regression</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Purpose</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Measures strength and direction of relationship</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Predicts one variable based on another</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Output</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Correlation coefficient (-1 to +1)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Equation (line or curve)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Variable Roles</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Symmetric (no dependent/independent)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Asymmetric (dependent and independent)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Causality</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Does not imply causation</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Models functional relationship</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Correlation</h2>
        <p className="mb-4">
          Correlation measures the strength and direction of a linear relationship between two variables.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Pearson Correlation Coefficient</h3>
            <p className="mb-2">The most common measure of correlation:</p>
            <BlockMath math="r = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2 \sum_{i=1}^{n} (y_i - \bar{y})^2}}" />
            
            <p className="mb-2">Alternative computational formula:</p>
            <BlockMath math="r = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{\sqrt{[n\sum x_i^2 - (\sum x_i)^2][n\sum y_i^2 - (\sum y_i)^2]}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Interpretation of r</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>r = +1:</strong> Perfect positive linear correlation</li>
              <li><strong>r = -1:</strong> Perfect negative linear correlation</li>
              <li><strong>r = 0:</strong> No linear correlation</li>
              <li><strong>0 &lt; |r| &lt; 0.3:</strong> Weak correlation</li>
              <li><strong>0.3 ≤ |r| &lt; 0.7:</strong> Moderate correlation</li>
              <li><strong>0.7 ≤ |r| &lt; 1:</strong> Strong correlation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Coefficient of Determination</h3>
            <p className="mb-2">The square of the correlation coefficient:</p>
            <BlockMath math="r^2" />
            <p className="mb-2">Interpretation: Proportion of variance in one variable explained by the other variable</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Spearman's Rank Correlation</h3>
            <p className="mb-2">Used when data is ordinal or not normally distributed:</p>
            <BlockMath math="r_s = 1 - \frac{6\sum d_i^2}{n(n^2-1)}" />
            <p className="mb-2">Where <InlineMath math="d_i" /> is the difference between the ranks of corresponding values.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Simple Linear Regression</h2>
        <p className="mb-4">
          Simple linear regression models the relationship between two variables using a straight line.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Regression Equation</h3>
            <BlockMath math="\hat{y} = b_0 + b_1 x" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\hat{y}" /> = predicted value of the dependent variable</li>
              <li><InlineMath math="b_0" /> = y-intercept (constant term)</li>
              <li><InlineMath math="b_1" /> = slope (regression coefficient)</li>
              <li><InlineMath math="x" /> = independent variable</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Least Squares Method</h3>
            <p className="mb-2">Formulas for calculating the regression coefficients:</p>
            <BlockMath math="b_1 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n} (x_i - \bar{x})^2} = \frac{S_{xy}}{S_{xx}}" />
            <BlockMath math="b_0 = \bar{y} - b_1 \bar{x}" />
            
            <p className="mb-2">Alternative formula for the slope:</p>
            <BlockMath math="b_1 = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Error of Estimate</h3>
            <p className="mb-2">Measures the accuracy of predictions:</p>
            <BlockMath math="s_e = \sqrt{\frac{\sum (y_i - \hat{y}_i)^2}{n-2}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Relationship to Correlation</h3>
            <BlockMath math="b_1 = r \frac{s_y}{s_x}" />
            <p className="mb-2">Where <InlineMath math="s_x" /> and <InlineMath math="s_y" /> are the standard deviations of x and y.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Multiple Regression</h2>
        <p className="mb-4">
          Multiple regression extends simple regression to include multiple independent variables.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Multiple Regression Equation</h3>
            <BlockMath math="\hat{y} = b_0 + b_1 x_1 + b_2 x_2 + \ldots + b_k x_k" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\hat{y}" /> = predicted value of the dependent variable</li>
              <li><InlineMath math="b_0" /> = y-intercept</li>
              <li><InlineMath math="b_1, b_2, \ldots, b_k" /> = regression coefficients</li>
              <li><InlineMath math="x_1, x_2, \ldots, x_k" /> = independent variables</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Matrix Form</h3>
            <BlockMath math="\mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}" />
            
            <p className="mb-2">Least squares solution:</p>
            <BlockMath math="\hat{\boldsymbol{\beta}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{Y}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Multiple Coefficient of Determination</h3>
            <BlockMath math="R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}" />
            
            <p className="mb-2">Adjusted R² (accounts for number of predictors):</p>
            <BlockMath math="R_{adj}^2 = 1 - \frac{(1-R^2)(n-1)}{n-k-1}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Assumptions and Diagnostics</h2>
        <p className="mb-4">
          Regression analysis relies on several assumptions that should be verified.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Assumptions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Linearity:</strong> The relationship between variables is linear</li>
              <li><strong>Independence:</strong> Observations are independent of each other</li>
              <li><strong>Homoscedasticity:</strong> Constant variance of residuals</li>
              <li><strong>Normality:</strong> Residuals are normally distributed</li>
              <li><strong>No multicollinearity:</strong> Independent variables are not highly correlated (for multiple regression)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Diagnostic Plots</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Residuals vs. Fitted Values (checks linearity and homoscedasticity)</li>
              <li>Normal Q-Q Plot (checks normality of residuals)</li>
              <li>Scale-Location Plot (checks homoscedasticity)</li>
              <li>Residuals vs. Leverage (identifies influential points)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Detecting Influential Points</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Outliers:</strong> Points with large residuals</li>
              <li><strong>High Leverage Points:</strong> Extreme values in the predictor space</li>
              <li><strong>Influential Points:</strong> Points that significantly affect the regression coefficients</li>
              <li><strong>Cook's Distance:</strong> Measures the influence of each observation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Non-Linear Regression</h2>
        <p className="mb-4">
          When the relationship between variables is not linear, non-linear regression models can be used.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Non-Linear Models</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Polynomial:</strong> <InlineMath math="y = b_0 + b_1 x + b_2 x^2 + \ldots + b_k x^k" /></li>
              <li><strong>Exponential:</strong> <InlineMath math="y = b_0 e^{b_1 x}" /></li>
              <li><strong>Logarithmic:</strong> <InlineMath math="y = b_0 + b_1 \ln(x)" /></li>
              <li><strong>Power:</strong> <InlineMath math="y = b_0 x^{b_1}" /></li>
              <li><strong>Logistic:</strong> <InlineMath math="y = \frac{L}{1 + e^{-k(x-x_0)}}" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Linearization Techniques</h3>
            <p className="mb-2">Some non-linear models can be transformed into linear form:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Exponential:</strong> <InlineMath math="\ln(y) = \ln(b_0) + b_1 x" /></li>
              <li><strong>Power:</strong> <InlineMath math="\ln(y) = \ln(b_0) + b_1 \ln(x)" /></li>
              <li><strong>Reciprocal:</strong> <InlineMath math="\frac{1}{y} = b_0 + b_1 x" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Correlation Coefficient</h3>
          <p className="mb-2">Calculate the correlation coefficient for the following data:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">x</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">y</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">xy</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">x²</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">y²</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">16</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">4</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">64</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">3</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">12</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">36</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">9</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">144</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">16</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">80</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">25</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">256</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">6</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">20</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">120</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">36</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">400</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">24</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">192</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">64</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">576</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Total</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">24</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">80</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">444</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">138</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1440</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">Using the computational formula:</p>
          <BlockMath math="r = \frac{n\sum xy - \sum x \sum y}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}" />
          <BlockMath math="r = \frac{5(444) - (24)(80)}{\sqrt{[5(138) - (24)^2][5(1440) - (80)^2]}}" />
          <BlockMath math="r = \frac{2220 - 1920}{\sqrt{[690 - 576][7200 - 6400]}} = \frac{300}{\sqrt{114 \times 800}} = \frac{300}{\sqrt{91200}} = \frac{300}{302} = 0.993" />
          
          <p className="mb-2">The correlation coefficient is 0.993, indicating a very strong positive linear relationship.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Simple Linear Regression</h3>
          <p className="mb-2">Using the same data, find the regression equation to predict y from x:</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Calculate the slope (b₁):</h4>
              <BlockMath math="b_1 = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2} = \frac{5(444) - (24)(80)}{5(138) - (24)^2} = \frac{300}{114} = 2.63" />
            </div>
            
            <div>
              <h4 className="font-semibold">Calculate the y-intercept (b₀):</h4>
              <p className="mb-2">First, find the means:</p>
              <BlockMath math="\bar{x} = \frac{24}{5} = 4.8, \quad \bar{y} = \frac{80}{5} = 16" />
              <BlockMath math="b_0 = \bar{y} - b_1\bar{x} = 16 - 2.63(4.8) = 16 - 12.62 = 3.38" />
            </div>
            
            <div>
              <h4 className="font-semibold">Regression Equation:</h4>
              <BlockMath math="\hat{y} = 3.38 + 2.63x" />
            </div>
            
            <div>
              <h4 className="font-semibold">Interpretation:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>For every unit increase in x, y increases by 2.63 units on average</li>
                <li>When x = 0, the predicted value of y is 3.38</li>
                <li>The coefficient of determination is r² = (0.993)² = 0.986, meaning 98.6% of the variation in y is explained by x</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Multiple Regression</h3>
          <p className="mb-2">Predict house price (y) based on size (x₁) and age (x₂):</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Size (sq ft)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Age (years)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Price ($1000s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1200</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">180</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1500</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">220</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1800</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">15</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">200</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2000</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">250</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2200</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">12</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">240</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">Using statistical software, the multiple regression equation might be:</p>
          <BlockMath math="\hat{y} = 50 + 0.08x_1 - 2.5x_2" />
          
          <div className="space-y-2">
            <h4 className="font-semibold">Interpretation:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Base price: $50,000</li>
              <li>Each additional square foot increases price by $80</li>
              <li>Each additional year of age decreases price by $2,500</li>
              <li>For a 1600 sq ft house that is 7 years old: Price = 50 + 0.08(1600) - 2.5(7) = 50 + 128 - 17.5 = $160,500</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Residual Analysis</h3>
          <p className="mb-2">Checking regression assumptions using residuals from Example 2:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">x</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">y (observed)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">ŷ (predicted)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Residual (y - ŷ)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8.64</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-0.64</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">3</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">12</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">11.27</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">0.73</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">16</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">16.53</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-0.53</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">6</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">20</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">19.16</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">0.84</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">24</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">24.42</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-0.42</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Standard Error of Estimate:</h4>
              <BlockMath math="s_e = \sqrt{\frac{\sum (y_i - \hat{y}_i)^2}{n-2}} = \sqrt{\frac{(-0.64)^2 + (0.73)^2 + (-0.53)^2 + (0.84)^2 + (-0.42)^2}{5-2}}" />
              <BlockMath math="s_e = \sqrt{\frac{0.41 + 0.53 + 0.28 + 0.71 + 0.18}{3}} = \sqrt{\frac{2.11}{3}} = \sqrt{0.70} = 0.84" />
            </div>
            
            <div>
              <h4 className="font-semibold">Analysis:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>The residuals are relatively small and randomly distributed</li>
                <li>No clear pattern in residuals suggests the linear model is appropriate</li>
                <li>Standard error of 0.84 indicates good prediction accuracy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}