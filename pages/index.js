import Head from "next/head";
import Chart from "./components/Chart";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Expenses chart component</title>
        <meta
          name="description"
          content="Frontend Mentor challenge. Expenses chart component"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <div className="wrapper">
        <div className="top-container">
          <div className="left-block">
            <p>My balance</p>
            <h3>$921.48</h3>
          </div>
          <svg
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
        </div>
        <div className="bottom-container">
          <h1>Spending - Last 7 days</h1>
          <Chart className="chart"/>
          <div className="end-container">
            <div className="left--end-container">
              <p>Total this month</p>
              <h2>$478.33</h2>
            </div>
            <div className="right--end-container">
              <h4>+2.4%</h4>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
