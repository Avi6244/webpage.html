
            
    $('#dashboard-page').hide();

   
    $('#login-form').on('submit', function(e) {
      
        e.preventDefault();
        $('#login-page').hide();
        $('#dashboard-page').show();
    });

   
    $('#add-club').click(function() {
        $('#add-club-form').toggle();
    });
    
    
    $('#club-form').on('submit', function(e) {
        e.preventDefault();
        
       
        var employee = $('#employee').val();
        var designation = $('#designation').val();
        var level = $('#level').val();
        var domain = $('#domain').val();
        
       
        $('#club-table-body').append(
            `<tr>
                <td>${employee}</td>
                <td>${designation}</td>
                <td>${level}</td>
                <td>${domain}</td>
            </tr>`
        );
        
     
        $('#employee').val('');
        $('#designation').val('');
        $('#level').val('');
        $('#domain').val('');
    });
 

