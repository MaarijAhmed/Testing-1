import logo from "./logo.svg";
import "./App.css";
import Firebase from "./config/firebase";
import { useState } from "react";
var obj = {
  Sheet1: [
    ("2" = {
      Address:
        "Plot #. 204/3, Flat #. B-1, 2nd Floor, Street #. 11, BYJCHS, Karachi.",
      "Booth No": "1",
      CNIC: "42301-3194990-3",
      DOB: "8/22/1948",
      FCardNo: "2",
      FatherName: "Hashim Hussain",
      Field14: "",
      "Member ID": "2",
      MemberName: "Ibrahim",
      Mobile: "0300-2130412",
      Orakh: "Sutter Wala",
      "Page No": "2",
      S_No: "13",
      "Voter ID": "1",
    }),
    ("11" = {
      Address:
        "Flat #. 419, Marriam Manzil, Middle Way Street #, 02, Old Kumhar Wara, Karachi.",
      "Booth No": "1",
      CNIC: "42301-9312322-5",
      DOB: "5/8/1956",
      FCardNo: "179",
      FatherName: "Ismail",
      Field14: "",
      "Member ID": "11",
      MemberName: "Ibrahim",
      Mobile: "0300-9280281",
      Orakh: "Husnani",
      "Page No": "30",
      S_No: "322",
      "Voter ID": "1",
    }),
    ("14" = {
      Address:
        "103,Hashim Plaza,1st Floor,Sadaya Street,Near Roxy Cinema,Bhimpura, Karachi.",
      "Booth No": "1",
      CNIC: "42301-0898541-7",
      DOB: "1/8/1956",
      FCardNo: "183",
      FatherName: "Younus Khatri",
      Field14: "",
      "Member ID": "14",
      MemberName: "Muhammad Hanif Khatri",
      Mobile: "0333-2246747",
      Orakh: "Bhuj Wala",
      "Page No": "31",
      S_No: "331",
      "Voter ID": "2",
    }),
    ("16" = {
      Address:
        "Flat #. G-6, Sana Villas, Prince Ali Khan Road, Garden East, Karachi.",
      "Booth No": "3",
      CNIC: "42301-6944851-9",
      DOB: "8/5/1945",
      FCardNo: "455",
      FatherName: "Abdul Rehman",
      Field14: "",
      "Member ID": "16",
      MemberName: "Ibrahim",
      Mobile: "0337-0345587",
      Orakh: "Kandakirya",
      "Page No": "8",
      S_No: "829",
      "Voter ID": "1",
    }),
    ("25" = {
      Address:
        "House #, L/Y 19/67, Street #. 3, Middle Way Street,  Old Kumharwara, Karachi.",
      "Booth No": "1",
      CNIC: "42301-2707868-9",
      DOB: "3/6/1963",
      FCardNo: "179",
      FatherName: "Ismail",
      Field14: "",
      "Member ID": "25",
      MemberName: "Ahmed",
      Mobile: "0335-1375513",
      Orakh: "Husnani",
      "Page No": "30",
      S_No: "323",
      "Voter ID": "2",
    }),
    ("27" = {
      Address:
        "2nd Floor,Habibia Building, Near Zonal Office,Kumharwara, Karachi.",
      "Booth No": "1",
      CNIC: "42301-0357970-3",
      DOB: "4/10/1974",
      FCardNo: "6",
      FatherName: "Yaqoob",
      Field14: "",
      "Member ID": "27",
      MemberName: "Muhammad Qasim",
      Mobile: "0300-9286149",
      Orakh: "Kunra",
      "Page No": "3",
      S_No: "30",
      "Voter ID": "2",
    }),
    ("30" = {
      Address:
        "Flat #,207,Aga Manzil, Rehmat Masjid Streeti, Bhimpura, Karachi.",
      "Booth No": "1",
      CNIC: "42301-7107272-3",
      DOB: "4/1/1954",
      FCardNo: "11",
      FatherName: "Mohammed Siddiq",
      Field14: "",
      "Member ID": "30",
      MemberName: "Ibrahim",
      Mobile: "0312-2896425",
      Orakh: "Moosani",
      "Page No": "4",
      S_No: "35",
      "Voter ID": "3",
    }),
    ("35" = {
      Address:
        "Ahmed Arcade, 3rd Floor, Flat #. C-2, Street #. 17, D Road, Bihar Colony, Karachi.",
      "Booth No": "6",
      CNIC: "42301-8131827-7",
      DOB: "9/6/1970",
      FCardNo: "1521",
      FatherName: "Usman Ghani",
      Field14: "",
      "Member ID": "35",
      MemberName: "Abdul Shakoor",
      Mobile: "0321-2247958",
      Orakh: "Bhujpuria",
      "Page No": "29",
      S_No: "2166",
      "Voter ID": "1",
    }),
    ("38" = {
      Address:
        "1st Floor,Flat #.2,Shujauddin Building,NP4/56 KamilGali,Sarafa Bazar,Karachi.",
      "Booth No": "6",
      CNIC: "42301-0934368-1",
      DOB: "6/27/1963",
      FCardNo: "1453",
      FatherName: "Haji Essa ",
      Field14: "",
      "Member ID": "38",
      MemberName: "Abdul Majeed",
      Mobile: "0312-2398277",
      Orakh: "Gabani",
      "Page No": "21",
      S_No: "2082",
      "Voter ID": "1",
    }),
    ("42" = {
      Address:
        "Flat #. 603, Makkia Corner, Garden East, Nishter Road, Karachi.",
      "Booth No": "1",
      CNIC: "42301-8551230-7",
      DOB: "3/9/1976",
      FCardNo: "18",
      FatherName: "Khatri Hassan",
      Field14: "",
      "Member ID": "42",
      MemberName: "Imran Parwani",
      Mobile: "0321-2064257",
      Orakh: "Parwani",
      "Page No": "6",
      S_No: "55",
      "Voter ID": "2",
    }),
    ("43" = {
      Address: "Apsara Appartment, J-8, Gulshan e Iqbal, Block 16, Karachi.",
      "Booth No": "1",
      CNIC: "42301-5238374-5",
      DOB: "9/15/1964",
      FCardNo: "21",
      FatherName: "Zakaria",
      Field14: "",
      "Member ID": "43",
      MemberName: "Suleman",
      Mobile: "0333-3520231",
      Orakh: "Gabani",
      "Page No": "7",
      S_No: "65",
      "Voter ID": "1",
    }),
    ("44" = {
      Address:
        "Flat #. 202, Madina Appartment, Old Kumhar Wara, Lea Market, Lyari, Karachi.",
      "Booth No": "1",
      CNIC: "42301-1966694-3",
      DOB: "7/13/1970",
      FCardNo: "25",
      FatherName: "Ali Muhammad",
      Field14: "",
      "Member ID": "44",
      MemberName: "Abdul Rashid",
      Mobile: "0321-2944691",
      Orakh: "Parwani",
      "Page No": "7",
      S_No: "75",
      "Voter ID": "1",
    }),
    ("45" = {
      Address:
        "Ground Floor,Flat #.2,Gulshan-e-Khatri Building, Street #,5,Lea Market, Karachi.",
      "Booth No": "1",
      CNIC: "42301-0876119-9",
      DOB: "9/14/1954",
      FCardNo: "29",
      FatherName: "Essa",
      Field14: "",
      "Member ID": "45",
      MemberName: "Abdul Majeed",
      Mobile: "0315-3018973",
      Orakh: "Mithai Wala",
      "Page No": "8",
      S_No: "82",
      "Voter ID": "1",
    }),
    ("46" = {
      Address:
        "4th Floor,Flat #.402,Zainab Bai Mithai Wala Appartment,Roxy Cinema,Bhimpura,Karachi.",
      "Booth No": "6",
      CNIC: "42301-0980442-7",
      DOB: "6/12/1957",
      FCardNo: "1511",
      FatherName: "Essa",
      Field14: "",
      "Member ID": "46",
      MemberName: "Mohammad Saleem",
      Mobile: "0307-2352252",
      Orakh: "Mithai Wala",
      "Page No": "28",
      S_No: "2157",
      "Voter ID": "2",
    }),
    ("51" = {
      Address:
        "Flat #,24, Kathawar Multi Building #.6, Adam Jee Nager, Block B, Karachi.",
      "Booth No": "1",
      CNIC: "42201-7074245-5",
      DOB: "12/29/1952",
      FCardNo: "32",
      FatherName: "Haji Ibrahim",
      Field14: "",
      "Member ID": "51",
      MemberName: "Muhammad Naeem",
      Mobile: "0333-2345911",
      Orakh: "Patel",
      "Page No": "9",
      S_No: "87",
      "Voter ID": "3",
    }),
    ("54" = {
      Address: "Flat #,4, 4th Floor, Press Wali Building, River Road, Karachi.",
      "Booth No": "5",
      CNIC: "42301-8792105-3",
      DOB: "7/1/1954",
      FCardNo: "1162",
      FatherName: "Dawood Jaffer",
      Field14: "",
      "Member ID": "54",
      MemberName: "Abdul Razzak",
      Mobile: "    -",
      Orakh: "Bhuj Wala",
      "Page No": "25",
      S_No: "1752",
      "Voter ID": "1",
    }),
    ("56" = {
      Address:
        "Flat #. 206, Aga Manzil, Rehmat Masjid Street, Bhimpura, Karachi.",
      "Booth No": "6",
      CNIC: "42301-5204344-9",
      DOB: "5/26/1963",
      FCardNo: "1491",
      FatherName: "Dawood Jaffar",
      Field14: "",
      "Member ID": "56",
      MemberName: "Abdul Majeed",
      Mobile: "0321-2140639",
      Orakh: "Bhuj Wala",
      "Page No": "25",
      S_No: "2128",
      "Voter ID": "1",
    }),
    ("59" = {
      Address:
        "B-204, 2nd Floor, Iqbal Garden, Near Garden Medical Centre, Garden West, Karachi.",
      "Booth No": "1",
      CNIC: "42301-1051301-7",
      DOB: "4/4/1959",
      FCardNo: "37",
      FatherName: "Haji Ismail",
      Field14: "",
      "Member ID": "59",
      MemberName: "Abdul Ghafoor",
      Mobile: "0300-3394785",
      Orakh: "Anjaria",
      "Page No": "9",
      S_No: "94",
      "Voter ID": "2",
    }),
    ("60" = {
      Address:
        "Haji Rafiq Plaza,Flat #.104,Khatri Jamat Khana Road,Bhimpura,Karachi.",
      "Booth No": "6",
      CNIC: "42301-1355294-1",
      DOB: "3/13/1967",
      FCardNo: "1466",
      FatherName: "Haji Mohd Ismail",
      Field14: "",
      "Member ID": "60",
      MemberName: "Abdul Rehman",
      Mobile: "0323-2545960",
      Orakh: "Anjaria",
      "Page No": "23",
      S_No: "2100",
      "Voter ID": "1",
    }),
    ("61" = {
      Address:
        "Al Mustafa Pride, 2nd Floor, Flat #. 207, Khatri Jamat Khana Road, Bhimpura, Karachi.",
      "Booth No": "6",
      CNIC: "42301-1051299-5",
      DOB: "5/8/1973",
      FCardNo: "1467",
      FatherName: "Haji Muhammad Ismail",
      Field14: "",
      "Member ID": "61",
      MemberName: "Abdul Sammad",
      Mobile: "0300-2198191",
      Orakh: "Anjaria",
      "Page No": "23",
      S_No: "2102",
      "Voter ID": "1",
    }),
    ("62" = {
      Address:
        "Flat #. A-401, Rehmat Karim Garden Building, Hard Davis Road, Garden West, Karachi.",
      "Booth No": "1",
      CNIC: "42301-0959357-3",
      DOB: "6/8/1951",
      FCardNo: "38",
      FatherName: "Abdullah",
      Field14: "",
      "Member ID": "62",
      MemberName: "Dawood",
      Mobile: "0336-2042499",
      Orakh: "Anjaria",
      "Page No": "10",
      S_No: "99",
      "Voter ID": "1",
    }),
    ("67" = {
      Address:
        "Flat #.5, Ibrahim Manzil, Nazimuddin Street, Nanakwara, Panmandi, Karachi.",
      "Booth No": "1",
      CNIC: "42301-0844307-3",
      DOB: "5/9/1966",
      FCardNo: "43",
      FatherName: "Ibrahim",
      Field14: "",
      "Member ID": "67",
      MemberName: "Muhammad Aslam",
      Mobile: "0300-8292183",
      Orakh: "Kodai Wala",
      "Page No": "10",
      S_No: "100",
      "Voter ID": "2",
    }),
    ("70" = {
      Address:
        "2nd Floor, Flat #. 201, Rabia Plaza, Opp: Khatri Jamat Khana, Bhimpura, Karachi. ",
      "Booth No": "1",
      CNIC: "42301-9353128-9",
      DOB: "1/1/1973",
      FCardNo: "44",
      FatherName: "Muhammad Ibrahim",
      Field14: "",
      "Member ID": "70",
      MemberName: "Muhammad Faisal",
      Mobile: "0309-2958131",
      Orakh: "Vinjan Wala",
      "Page No": "10",
      S_No: "103",
      "Voter ID": "3",
    }),
    ("72" = {
      Address: "3 rd Floor,F/6, Raees Gohram Khan Bulding,Lee market, Karachi",
      "Booth No": "6",
      CNIC: "42301-1082338-5",
      DOB: "1/1/1970",
      FCardNo: "1294",
      FatherName: "Abdul Sattar",
      Field14: "",
      "Member ID": "72",
      MemberName: "Shakeel Ahmed",
      Mobile: "0322-2798653",
      Orakh: "Chowksi",
      "Page No": "5",
      S_No: "1908",
      "Voter ID": "2",
    }),
  ],
};

function App() {
  const [voterId, setID] = useState("");
  const bring_data_of_voter = () => {
    var ref = Firebase.database().ref(`/data/Sheet1/${voterId}`);
    ref.on("value", (snapshot) => {
      console.log(snapshot.val());
    });
  };
  console.log(voterId);
  return (
    <div className="App">
      <input
        onChange={(e) => {
          setID(e.target.value);
        }}
        placeholder="enter voter ID"
      />
      <button onClick={bring_data_of_voter}>Bring data</button>
    </div>
  );
}

export default App;
