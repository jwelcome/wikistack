const html = require('html-template-tag')
const layout = require('./layout')

module.exports = () =>
  layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div class="form-group">
  
      <label for="name" class="col-sm-2 control-label">Your Name</label>
      <div class="col-sm-10">
      <input id="author" name="author" type="text" class="form-control"/>
      </div>

      <label for="email" class="col-sm-2 control-label">Your email</label>
      <div class="col-sm-10">
      <div><input id="email" name="email" type="email" class="form-control"/></div>
      </div>
    
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>


    
    <div>
      <label for="content" class="col-sm-2 control-label">Page content</label>
        <div class="col-md-10">
        <textarea name="content" class="form-control"/></textarea>
        </div>
    </div>
    
    <div>
        <label for="OpenClose" class="col-sm-2 control-label">Status Open/Close</label>
        <div class="col-sm-2">
        <input id="pageStatus" name="OPEN" type="text" class="form-control"/>
        </div>
      </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`)
