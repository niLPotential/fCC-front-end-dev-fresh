import { Head } from "$fresh/runtime.ts";
import Calculator from "../islands/Calculator.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Tests from "../components/Tests.tsx";

export default function CalculatorPage() {
  return (
    <>
      <Head>
        <title>JavaScript Calculator</title>
      </Head>

      <Sidebar active="/calculator" />
      <Calculator />

      <Tests />
    </>
  );
}
