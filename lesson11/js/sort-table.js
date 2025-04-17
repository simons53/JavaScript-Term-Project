var compare = {
    name: function(a, b) {
      a = a.replace(/^the /i, '');
      b = b.replace(/^the /i, '');
  
      return a < b ? -1 : a > b ? 1 : 0;
    },
  
    blood: function(a, b) {
        var order = { "Pure-Blood": 1, "Half-Blood": 2, "Muggle-Born": 3, "Unknown": 4 };
        return (order[a] || 5) - (order[b] || 5);
    },
  
    date: function(a, b) {
      a = new Date(a);
      b = new Date(b);
  
      return a - b;
    }
  };
  
  $('.sortable').each(function() {
    var $table = $(this);
    var $tbody = $table.find('tbody');
    var $controls = $table.find('th');
    var rows = $tbody.find('tr').toArray();
  
    $controls.on('click', function() {
      var $header = $(this);
      var order = $header.data('sort');
      var column;
  
      if ($header.is('.ascending') || $header.is('.descending')) {
        $header.toggleClass('ascending descending');
        $tbody.append(rows.reverse());
      } else {
        $header.addClass('ascending');
        $header.siblings().removeClass('ascending descending');
  
        if (compare.hasOwnProperty(order)) {
          column = $controls.index(this);
  
          rows.sort(function(a, b) {
            a = $(a).find('td').eq(column).text();
            b = $(b).find('td').eq(column).text();
  
            return compare[order](a, b);
          });
  
          $tbody.append(rows);
        }
      }
    });
  });
  