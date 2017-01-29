<!DOCTYPE html>
<html lang="en">

<head>
  <?php include_once('common/header.php');?>
  <?php include_once('common/print_blogs.php');?>
  <link rel="stylesheet" href="styles/pages.css">
</head>

<body>
    <?php include_once('common/navbar.php');?>
    <?php $blog_type = $_GET['type'];?>

    <div class="main-content">
        <div class="container">
            <div class="row">
                  <h1><?php echo ucfirst(htmlspecialchars($blog_type)); ?></h1>
                  <?php print_blog_list($blog_type);?>
            </div>
        </div>
    </div>

    <?php include_once('common/footer.php');?>

</body>
</html>
