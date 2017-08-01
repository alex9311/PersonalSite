<!DOCTYPE html>
<html lang="en">

<head>
  <?php include_once('common/header.php');?>
  <link rel="stylesheet" href="styles/pages.css">
</head>

<body>

    <!-- Navigation -->
    <?php include_once('common/navbar.php');?>

    <div class="main-content">
        <div class="container">

            <div class="row">
                <div class="col-lg-12 transbox">
                  <h3>About</h3>
                  <p>
                    <img class="thumbnail" src="resources/personal_thumb.jpg" align="right">
                    My name is Alex Simes. 
                    I'm a recent MSc graduate in Software technology who also likes to get out in nature and exercise.
                    I did my undergrad at UCSB and went abroad to The Netherlands for two years to get my Master's in Software Technology. 
                  </p>
                  <p>
                    I built this blog as a web development exercise and to share some of my interests.
                    It's built pretty much from scratch on a LAMP stack using bootstrap to help out my styling.
                  </p>
                  <p>
                    The goal of the <i>Outdoor</i> section of this site is to share some neat excursions I've been on and serve as a guide for anyone looking.
                    Whenever I plan trips, I really appreciate having other people's experiences to guide me, so I'd like to pay it forward.
                  </p>
                  <p>
                    The <i>Programming</i> side of the site serves as a portfolio and could be helpful to other programmers as well.
                    I share cool problems I have solved or personal projects I take on.
                  </p>
                  <h3>Contact</h3>
                  <p>Send me an email at <span id="email"></span>!</p>
                  <script>
                      var user = 'alex.simes29',
                      domain = 'gmail.com',
                      element = document.getElementById('email');
                      element.innerHTML = user + '@' + domain;
                  </script>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>

    <!-- Footer -->
    <?php include_once('common/footer.php');?>

</body>

</html>
