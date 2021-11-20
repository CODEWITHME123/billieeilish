function myFunction() {
  var input = document.getElementById('mySearch').value
  var result = "https://www.google.com/search?q=" + input + " by Billie eilish"
  if (input == "" || input == " ") {
  } else {
    location.assign(result)
  }
}
var urls = [
     "https://www.youtube.com/watch?v=EgBJmlPo8Xw",
      "https://www.youtube.com/watch?v=Q2WcdaF8uL8",
      "https://www.youtube.com/watch?v=LZyybvVx-js",
      "https://www.youtube.com/watch?v=pbMwTqkKSps",
      "https://www.youtube.com/watch?v=RUQl6YcMalg",
      "https://www.youtube.com/watch?v=Ah0Ys50CqO8",
      "https://www.youtube.com/watch?v=BboMpayJomw",
      "https://www.youtube.com/watch?v=V1Pl8CzNzCw",
      "https://www.youtube.com/watch?v=viimfQi_pUw",
      "https://www.youtube.com/watch?v=HUHC9tYz8ik",
      "https://www.youtube.com/watch?v=ebb5AinKxWI",
      "https://www.youtube.com/watch?v=DyDfgMOUjCI",
      "https://www.youtube.com/watch?v=gBRi6aZJGj4",
      "https://www.youtube.com/watch?v=-tn2S3kJlyU",
      "https://www.youtube.com/watch?v=Fvj6PE3gN4o",
      "https://youtu.be/-e7wiyNO2us",
      "https://www.youtube.com/watch?v=Dm9Zf1WYQ_A",
      "https://youtu.be/-PZsSWwc9xA",
      "https://www.youtube.com/watch?v=k1ATPhkVWi0",
      "https://www.youtube.com/watch?v=xXFdnHiGwos",
      "https://www.youtube.com/watch?v=dVUmSgzgOqs",
      "https://www.youtube.com/watch?v=9dobJDxPEzM",
      "https://www.youtube.com/watch?v=8TsWkuWWXgc",
      "https://www.youtube.com/watch?v=qpQSjf-0Lc8",
      "https://www.youtube.com/watch?v=Zh21Yu2VGRM",
      "https://www.youtube.com/watch?v=yaJx0Gj_LCY",
      "https://www.youtube.com/watch?v=skHbZBsS7hM",
      "https://www.youtube.com/watch?v=P4z1O3miesI",
      "https://www.youtube.com/watch?v=FQ0iq10ULNA",
      "https://www.youtube.com/watch?v=tGHTOVw6F4Q",
      "https://www.youtube.com/watch?v=zxEAAnsGfrg",
      "https://www.youtube.com/watch?v=OZYd9JxithE",
      "https://www.youtube.com/watch?v=0I4fD49Gbck",
      "https://www.youtube.com/watch?v=vciZvVJyNYU",
      "https://www.youtube.com/watch?v=fzeWc3zh01g",
      "https://www.youtube.com/watch?v=S2dRcipMCpw",
      "https://www.youtube.com/watch?v=FP-IopSHomc",
      "https://www.youtube.com/watch?v=7AS9r_E0PY4",
      "https://www.youtube.com/watch?v=u_xNKhy3kyo",
      "https://www.youtube.com/watch?v=4tZ969oc-yI",
      "https://www.youtube.com/watch?v=Fcd8UbutjIg",
      "https://www.youtube.com/watch?v=JpL7scu-EmY",
      "https://www.youtube.com/watch?v=geUYm3f6ZA4",
      "https://www.youtube.com/watch?v=ZlvfYmfefSI",
      "https://www.youtube.com/watch?v=vg6V2UWSjiM",
      "https://www.youtube.com/watch?v=FpeZsTo5hZw",
      "https://www.youtube.com/watch?v=5GJWxDKyk3A",
      "https://www.youtube.com/watch?v=pxxYO7fcFrM",
];

function goSomewhere() {
    var url = urls[Math.floor(Math.random()*urls.length)];
    window.location = url; // redirect
}