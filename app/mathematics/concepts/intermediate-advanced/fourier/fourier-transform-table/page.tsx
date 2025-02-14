import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";

export default function FourierTransformTable() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/" },
    {
      label: "Fourier",
      href: "/mathematics/formulas/fourier",
    },
    {
      label: "Fourier Transform Table",
      href: "/mathematics/formulas/fourier/fourier-transform-table",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Fourier Transform Table</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Convolution Formula</h2>
        <BlockMath math="(f * g)(t) = \int_{-\infty}^{\infty} f(\tau) g(t - \tau) \, d\tau" />

        <h2 className="mb-4 text-2xl font-semibold">Explanation</h2>
        <p className="mb-4">
          Convolution is a mathematical operation that combines two functions to
          produce a third function. It expresses how the shape of one function
          is modified by the other. In signal processing, convolution is used to
          describe the output of a system when the input is known, and the
          system&#39;s impulse response is given.
        </p>
        <p className="mb-4">
          The formula <InlineMath math="(f * g)(t)" /> represents the
          convolution of two functions <InlineMath math="f(t)" /> and{" "}
          <InlineMath math="g(t)" />. The integral sums the product of{" "}
          <InlineMath math="f(\tau)" /> and a time-reversed and shifted version
          of <InlineMath math="g(t - \tau)" /> over all possible values of{" "}
          <InlineMath math="\tau" />.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <p className="mb-4">
          Consider two functions:
          <ul className="mb-4 list-disc pl-8">
            <li>
              <InlineMath math="f(t) = e^{-at}" /> (exponential decay)
            </li>
            <li>
              <InlineMath math="g(t) = \sin(\omega t)" /> (sine wave)
            </li>
          </ul>
          The convolution of these two functions is:
          <BlockMath math="(f * g)(t) = \int_{0}^{t} e^{-a\tau} \sin(\omega (t - \tau)) \, d\tau" />
          This integral represents the combined effect of the exponential decay
          and the sine wave over time.
        </p>
      </div>
    </div>
  );
}
