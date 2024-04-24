module.exports = router => {

 router.get('/applications/:applicationId', (req,res) => {
   // To get an individual Id use : in the path (see above)
   // req.session.data.applications - all the data
   //req.params.applicationId - to get at the Id in the query string
   let application = req.session.data.applications.find(application => application.id === req.params.applicationId)

   res.render('/applications/show', {
     application
   })    
 }) 

}

