import React from "react";
import "./Mis.css";
import Report from "./Report";

const MIS = () => {
  return (
    <div className="mis">
      <Report />
      <div className="mis1">
        <div className="mis2">
        <div > 
            <label style={{marginTop:"15px"}}>Select status for TUCs</label>
            <br />
            <div className="mis2_0"> 
            <p style={{marginLeft:"-15px"}}><span><input type="checkbox" />All</span>
            <span><input type="checkbox" />Active</span>
            <span><input type="checkbox" />Inactive</span>
            </p>
            </div>
          </div>
          <div className="mis2_2">
            <label>TUCs</label>
            <br />
            <input type="text" placeholder="Search TUC" />
          </div>

          <div className="input-field">
            <label>Month</label>
            <br />
            <select className="mis2_1" name="BranchName" required>
              <option value="">January</option>
              <option value="">Febuary</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
          </div>

          <div className="input-field">
            <label>Year</label>
            <br />
            <select className="mis2_1" name="BranchName" required>
              <option value="">2022</option>
              <option value="">2023</option>
              <option value="">2024</option>
              <option value="">2025</option>
              
            </select>
          </div>

          <div className="mis2_3">
            <label></label>
            <br />
            <button type="button">Search</button>
          </div>

          <div className="mis2_4">
            <label></label>
            <br />
            <select name="BranchName" required>
              <option value="VGNDemo">
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
                Download
              </option>
              <option value="Noida">
                Download CSV{" "}
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
              </option>
              <option value="Greater Noida">Download XLSX</option>
            </select>
          </div>
          {/* <div className="input-field">
            <label></label>
            <br />
            <select className="mis2_1" name="BranchName" required>
              <option value="VGNDemo">
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
                Download All
              </option>
              <option value="Noida">
                Download CSV{" "}
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
              </option>
              <option value="Greater Noida">Download XLSX</option>
            </select>
          </div> */}
        </div>
        <div className="input-field">
            <label></label>
            <br />
            <select className="mis2_1" name="BranchName" required>
              <option value="VGNDemo">
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
                Download All
              </option>
              <option value="Noida">
                Download CSV{" "}
                <span>
                  <i className="fa fa-fw fa-download"></i>
                </span>
              </option>
              <option value="Greater Noida">Download XLSX</option>
            </select>
          </div>

        <div className="mis3">
          <table style={{overflowX:"auto"}}>
            <thead>
              <tr>
                <th>Day Time</th>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th>19</th>
                <th>20</th>
                <th>21</th>
                <th>22</th>
                <th>23</th>
                <th>Total</th>
               </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                 <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>1</td>
                <td>2</td>
                <td>7</td>
                <td>1</td>
                <td>2</td>
              </tr>

              <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
               <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>1</td>
              <td>2</td>
              <td>7</td>
              <td>1</td>
              <td>2</td>
             </tr>
            
            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
             <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>1</td>
            <td>2</td>
            <td>7</td>
            <td>1</td>
            <td>2</td>
           </tr>

          <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>1</td>
          <td>2</td>
          <td>7</td>
          <td>1</td>
          <td>2</td>
          </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default MIS;
