import React from "react";
import "./InfoBlockItemTable.css";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";


const InfoBlockItemTable = () => {
  return (
    <table>
      <tr>
        <th valign="top">Name</th>
        <th valign="top">Access</th>
        <th valign="top">Actions</th>
      </tr>
      <tr>
        <td valign="top">Jake Gyllenhaal</td>
        <td valign="top">View Channels & Profiles,  View Finances Accure Money</td>
        <td valign="top">
          <div className="info-block__table-btns">
            <button>
              <EditIcon />
            </button>
            <button>
              <DeleteIcon />
            </button>
          </div>
        </td>
      </tr>
    </table>
  )
};

export default InfoBlockItemTable;