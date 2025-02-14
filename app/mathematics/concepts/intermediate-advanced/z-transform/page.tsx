import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function ZTransform() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Z-Transform", href: "/mathematics/formulas/z-transform" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6">
        <h1 className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-teal-300 dark:to-emerald-400">
          Z-Transform
        </h1>
        <p className="text-lg text-gray-600 md:text-xl dark:text-gray-300">
          The discrete-time equivalent of the Laplace transform, essential for
          digital signal processing and system analysis
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Content Section */}
      <div className="mt-8 space-y-8">
        {/* Definition Section */}
        <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-400 dark:to-emerald-400">
            Definition
          </h2>
          <BlockMath math="X(z) = \mathcal{Z}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n]z^{-n}" />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The Z-transform converts a discrete-time signal{" "}
            <InlineMath math="x[n]" /> into a complex frequency domain
            representation <InlineMath math="X(z)" />, where
            <InlineMath math="z" /> is a complex variable.
          </p>
        </div>

        {/* Properties Section */}
        <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-400 dark:to-emerald-400">
            Key Properties
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Linearity
              </h3>
              <BlockMath math="\mathcal{Z}\{ax_1[n] + bx_2[n]\} = aX_1(z) + bX_2(z)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Time Shifting
              </h3>
              <BlockMath math="\mathcal{Z}\{x[n-k]\} = z^{-k}X(z)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Convolution
              </h3>
              <BlockMath math="\mathcal{Z}\{x_1[n] * x_2[n]\} = X_1(z)X_2(z)" />
            </div>
          </div>
        </div>

        {/* Example Section */}
        <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-400 dark:to-emerald-400">
            Example: Unit Step Function
          </h2>
          <BlockMath math="\mathcal{Z}\{u[n]\} = \frac{1}{1 - z^{-1}} \quad \text{for } |z| > 1" />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The Z-transform of the unit step function <InlineMath math="u[n]" />{" "}
            demonstrates how discrete-time signals are transformed into rational
            functions in the Z-domain.
          </p>
        </div>

        {/* Applications Section */}
        <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-400 dark:to-emerald-400">
            Applications
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
            <li>Digital filter design and analysis</li>
            <li>Discrete-time system stability analysis</li>
            <li>Digital control systems</li>
            <li>Signal processing algorithm development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
