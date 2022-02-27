<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Laravel 8 CRUD Tutorial From Scratch</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">




</head>


<body>
    <div class="container mt-2">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>Laravel 8 CRUD Example Tutorial</h2>
                </div>
                <div class="pull-right mb-2">
                    <button type="submit" class="btn btn-success text-light" onclick="renderFormCreate()">Create
                        Contact</button>
                    <button type="submit" class="btn btn-info text-light" onclick="location.reload()">All
                        Contacts</button>
                </div>

            </div>
        </div>

        <div id="form">


            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>surname</th>
                        <th>phone</th>
                        <th>action</th>
                    </tr>
                </thead>

                <tbody id="container">

                </tbody>

            </table>
        </div>

        <script src="js/main.js"></script>
</body>

</html>
