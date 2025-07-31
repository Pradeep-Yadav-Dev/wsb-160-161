

Common Mongoose commands:-


| Purpose         | Code sample                                            |
| --------------- | ------------------------------------------------------ |
| Connect to DB   | `mongoose.connect('mongodb://localhost:27017/testdb')` |
| Define schema   | `const schema = new mongoose.Schema({ name: String })` |
| Create model    | `const User = mongoose.model('User', schema)`          |
| Create document | `const user = new User({ name: 'Alice' })`             |
| Save document   | `await user.save()`                                    |
| Find all        | `User.find()`                                          |
| Find one        | `User.findOne({ name: 'Alice' })`                      |
| Find by ID      | `User.findById(id)`                                    |
| Update          | `User.updateOne({ name: 'Alice' }, { age: 25 })`       |
| Delete          | `User.deleteOne({ name: 'Alice' })`                    |
