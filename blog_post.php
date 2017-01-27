<!DOCTYPE html>
<html lang="en">

<head>
  <?php include_once('common/header.php');?>
  <?php include_once('common/print_blogs.php');?>
  <link rel="stylesheet" href="styles/pages.css">
</head>

<body>
    <?php include_once('common/navbar.php');?>
    <?php 
        $blog_id = pg_escape_string($_GET['id']);
        $blog = get_blog($blog_id); 
    ?>

    <div class="main-content">
        <div class="container">

            <div class="row">
                  <div class="col-lg-12 transbox">
                      <h1><?php echo $blog->title ?></h1>
		      <?php readfile("blogs/".$blog->content_link.".html"); ?>
                  </div>
            </div>

        </div>

    </div>

    <?php include_once('common/footer.php');?>

</body>
</html>
