import Breadcrumb from "@/components/Breadcrumb";

export default function FundamentalTheoremOfCalculus() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Differential Calculus",
      href: "/mathematics/formulas/calculus/integral",
    },
    {
      label: "Fundamental Theorem of Calculus",
      href: "/mathematics/formulas/calculus/integral/fundamental-theorem-of-calculus",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Fundamental Theorem of Calculus</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Formula</h2>
        <p className="mb-4 text-lg">
          (x + y)^n = Σ(k=0 to n) (n choose k) x^(n-k) y^k
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Explanation</h2>
        <p className="mb-4">
          The Binomial Theorem provides a way to expand expressions of the form
          (x + y)^n, where n is a non-negative integer.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <p className="mb-4">For (x + y)^2: (x + y)^2 = 1x^2 + 2xy + 1y^2</p>
      </div>
    </div>
  );
}
