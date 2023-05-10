import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import LineChart from "./charts/LineChart";
import { UserChart, pricecardlists } from "@/data/Data";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import PieChart from "./charts/PieChart";

interface DashboardProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const links = [
  {
    id: 1,
    name: "Dashboard",
    isrc: "dashboard",
  },
  {
    id: 2,
    name: "Transactions",
    isrc: "transactions",
  },
  {
    id: 3,
    name: "Schedules",
    isrc: "schedule",
  },
  {
    id: 4,
    name: "Users",
    isrc: "user",
  },
  {
    id: 5,
    name: "Settings",
    isrc: "settings",
  },
];

Chart.register(CategoryScale);

const Dashboard = ({ setIsLoggedIn }: DashboardProps) => {
  const [chartData, setChartData] = useState({
    labels: UserChart.map((data) => data.year),

    datasets: [
      {
        label: "Users Gained ",
        data: UserChart.map((data) => data.userGain),
        backgroundColor: "#8cce8a",
        borderColor: "#8cce8a",
        borderWidth: 2,
      },
      {
        label: "Users Lost ",
        data: UserChart.map((data) => data.userLost),
        backgroundColor: "#bc5a5a",
        borderColor: "#bc5a5a",
        borderWidth: 2,
      },
    ],
  });
  const [PiechartData, setPieChartData] = useState({
    labels: UserChart.map((data) => data.year),

    datasets: [
      {
        label: "Users Gained ",
        data: UserChart.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.nav}>
          <div className={styles.title}>Board.</div>
          <ul className={styles.lists}>
            {links.map((link) => (
              <li className={styles.listitem} key={link.id}>
                <Image
                  src={require("@/assets/icons/" + link.isrc + ".svg")}
                  alt="link"
                  className={styles.icons}
                />
                <div className={styles.navlinks}>{link.name}</div>
              </li>
            ))}
          </ul>
        </div>
        <a onClick={() => setIsLoggedIn(false)} className={styles.logout}>
          Logout
        </a>
      </div>
      <div className={styles.right}>
        {/* Top Navigation Bar */}
        <div className={styles.toplevel}>
          <div className={styles.heading}>Dashboard.</div>
          <div className={styles.topright}>
            <form className={styles.searchform}>
              <input
                type="search"
                placeholder="Search..."
                className={styles.searchbox}
              />
              <button type="submit" className={styles.searchbtn}>
                Search
              </button>
            </form>
            <div className={styles.centered}>
              <Image src={require("@/assets/icons/bell.svg")} alt="bell" />
            </div>
            <div className={styles.centered}>
              <Image
                src={require("@/assets/images/me.png")}
                alt="me"
                className={styles.avatar}
              />
            </div>
          </div>
        </div>
        <div className={styles.pricecards}>
          {pricecardlists.map((lists) => (
            <div
              className={[styles.pricecard, styles[lists.color]].join(" ")}
              key={lists.id}
            >
              <Image
                src={require("@/assets/icons/" + lists.iconame + ".svg")}
                alt="revenue"
                className={styles.pricecardicon}
              />
              <div className={styles.pricecardtitle}>{lists.title}</div>
              <div className={styles.pricecardprice}>{lists.price}</div>
            </div>
          ))}
        </div>
        <div className={styles.linechart}>
          <LineChart chartData={chartData} />
          <PieChart chartData={PiechartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
