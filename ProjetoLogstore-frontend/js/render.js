$('#tabela').DataTable({
  ajax: {
    url: 'http://localhost:8080/logstore/log',
    dataSrc: ''
  },
  columns: [{
      data: 'id',
      'orderable': false
    },
    {
      data: 'occurrences',
      'orderable': false
    },
    {
      data: 'content',
      'orderable': false
    }, {
      "render": function (data, type, full, meta) {
        const {id} = full
        return `<button type='submit' id='${id}' style='border-radius: 10px;' class='btn btn-danger btn-delete'>Delete</button>`
      }
    }
  ],
  "order": [
    [1, "desc"]
  ]
});

$('#tabela').on('click','.btn-delete', function(){
  $(this).parents('tr').remove();
  console.log(this.id);
  $.ajax({
    type:"delete",
    url:"http://localhost:8080/logstore/log/"+this.id   
  })
})