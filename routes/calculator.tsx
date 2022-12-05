import { asset, Head } from "$fresh/runtime.ts";
import Calculator from "../islands/Calculator.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Tests from "../components/Tests.tsx";

export default function CalculatorPage() {
  return (
    <>
      <Head>
        <title>JavaScript Calculator</title>
        <link rel="stylesheet" href={asset("calculator.css")} />
      </Head>

      <Sidebar active="/calculator" />
      <Calculator />

      <Tests />
    </>
  );
}
