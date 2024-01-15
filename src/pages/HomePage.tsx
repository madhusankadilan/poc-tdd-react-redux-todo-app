import Delete from "../components/Icons/Delete";
import Done from "../components/Icons/Done";
import Edit from "../components/Icons/Edit";

export default function HomePage() {
   return (
      <main className="home-page">
         <section className="header">
            <div className="title-wrapper">
               <span className="title">Task Management Tool</span>
            </div>
         </section>
         <section className="content">
            <div className="column">
               <div className="column-title-wrapper">
                  <span className="column-title">TO DO</span>
               </div>
               <div className="add-button">+</div>
               <div className="task-wrapper">
                  <div className="task">
                     <div className="task-header">
                        <span>Task 01</span>
                     </div>
                     <div className="task-body">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua.
                        </p>
                     </div>
                     <div className="task-footer">
                        <div className="edit-icon-todo">
                           <Edit />
                        </div>
                        <div className="delete-icon-todo">
                           <Delete />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="task-wrapper">
                  <div className="task">
                     <div className="task-header">
                        <span>Task 03</span>
                     </div>
                     <div className="task-body">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua.
                        </p>
                     </div>
                     <div className="task-footer">
                        <div className="edit-icon-todo">
                           <Edit />
                        </div>
                        <div className="delete-icon-todo">
                           <Delete />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="column">
               <div className="column-title-wrapper">
                  <span className="column-title">IN PROGRESS</span>
               </div>
               <div className="task-wrapper">
                  <div className="task">
                     <div className="task-header">
                        <span>Task 02</span>
                     </div>
                     <div className="task-body">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua.
                        </p>
                     </div>
                     <div className="task-footer">
                        <div className="edit-icon-inprogress">
                           <Edit />
                        </div>
                        <div className="delete-icon-inprogress">
                           <Delete />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="column">
               <div className="column-title-wrapper">
                  <span className="column-title">DONE</span>
               </div>
               <div className="task-wrapper">
                  <div className="task">
                     <div className="task-header">
                        <span>Task 04</span>
                     </div>
                     <div className="task-body">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor incididunt ut labore et
                           dolore magna aliqua.
                        </p>
                     </div>
                     <div className="task-footer done">
                        <div className="done-icon-done">
                           <Done />
                        </div>
                        <div className="right-icon-wrapper">
                           <div className="edit-icon-done">
                              <Edit />
                           </div>
                           <div className="delete-icon-done">
                              <Delete />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
