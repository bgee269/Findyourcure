var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
<<<<<<< HEAD
  host: "bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "dvi6ll60oa36r1r9",
  password: "dzbue5r1ffr917p3",
  database: "ogb3reih9ah9fyrn"
});
=======

>>>>>>> 5a0cf2dc2f2dc7b138f4309ae12b9d60765c39c0

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;

<body>

<header>
        
    <nav class="navbar navbar-expand-lg navbar-light bg-blue">
        <a class="navbar-brand" href="#">C</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://curepenn.com/">Link</a>
                </li>
        </div>
        </li>
        </ul>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">

            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="portfolio.html" role="tab"
                    aria-controls="profile" aria-selected="false">Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="contact.html" role="tab" aria-controls="contact"
                    aria-selected="false">Find My Cure</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>
        </div>
    </nav>
    <h1>Products</h1>
</header>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="thumbnail">
                <a href="https://www.cdc.gov/marijuana/faqs/what-is-marijuana.html">
                    <img src="./assets/cannabis-anatomy.jpg"
                        alt="Lights" style="width:100%">
                    <div class="caption">
                        <p>Flower</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="thumbnail">
                <a href="https://www.leafly.com/news/cannabis-101/cannabis-tinctures-101-what-are-they-how-to-make-them-and-how-to">
                    <img src="./assets/tincture.jpg" alt="Nature"
                        style="width:100%">
                    <div class="caption">
                        <p>Tincture</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="thumbnail">
                <a href="https://www.leafly.com/news/strains-products/what-are-pre-filled-cannabis-oil-vape-cartridges">
                    <img src="./assets/cart.png" alt="Fjords"
                        style="width:100%">
                    <div class="caption">
                        <p>Vape</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="row 2">
        <div class="col-md-4">
            <div class="thumbnail">
                <a href="https://www.leafly.com/news/cannabis-101/5-differences-between-cannabis-concentrates-and-flower">
                    <img src="./assets/wax.jpg" alt="Lights" style="width:100%">
                    <div class="caption">
                        <p>Concentrate</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="thumbnail">
                <a href="https://www.leafly.com/news/cannabis-101/what-are-cannabis-topicals-2">
                    <img src="./assets/THC Lotion.jpg" alt="Nature"
                        style="width:100%">
                    <div class="caption">
                        <p>Cream</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>