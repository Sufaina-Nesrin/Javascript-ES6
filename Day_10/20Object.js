const Person = function(firstAndLast) {
 
    var fullName = firstAndLast;
    
    this.getFirstName = function() {
      return fullName.split(' ')[0];
    };
    
    this.getLastName = function() {
      return fullName.split(' ')[1];
    };
    
    this.getFullName = function() {
      return fullName;
    };
    
    this.setFirstName = function(firstName) {
      fullName = firstName + ' ' + fullName.split(' ')[1];
    };
    
    this.setLastName = function(lastName) {
      fullName = fullName.split(' ')[0] + ' ' + lastName;
    };
    
    this.setFullName = function(newFullName) {
      fullName = newFullName;
    };
  };
  
  
  const bob = new Person("Bob Ross");
  console.log(bob.getFullName());
 bob.setFullName('Jhon Doe')
  console.log(bob.getFullName())
  console.log(bob.getFirstName())
  