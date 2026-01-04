import React, { useState } from "react";
import Usermanagement from "@/components/UserTable/index.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, Shield, ChevronDown, Check } from "lucide-react";
import { getAllUsers, deleteUser } from "@/services/api/users";
import { updateUserRole } from "@/services/api/users";

import { useEffect } from "react";
import toast from "react-hot-toast";
const UserManagement = () => {
  //Lay user tu local storage voi key userInfo
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo.user.id;
  const role = userInfo.user.role;

  const [listUsers, setListUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      console.log("Fetching users...");
      const response = await getAllUsers();
      const allUsers = response.data.items;
      setListUsers(allUsers);
      console.log("Fetched users:", allUsers);
    } catch (err) {
      console.error("Lỗi khi tải user:", err);
      setListUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [userToChangeRole, setUserToChangeRole] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOpenDelete = (user) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (userToDelete) {
      try {
        // Gọi API để xóa user trên server
        await deleteUser(userToDelete._id);

        // Đóng dialog
        setDeleteDialogOpen(false);
        setUserToDelete(null);

        // Hiển thị thông báo thành công
        toast.success(`User "${userToDelete.username}" has been deleted successfully!`);

        // Tải lại danh sách users từ server
        fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
        toast.error(err.response?.data?.message || "Failed to delete user. Please try again.");
      }
    }
  };

  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setUserToDelete(null);
  };

  const handleOpenRoleDialog = (user) => {
    setUserToChangeRole(user);
    setSelectedRole(user.role);
    setRoleDialogOpen(true);
    setDropdownOpen(false);
  };

  const handleSaveRoleChange = async () => {
    if (userToChangeRole && selectedRole) {
      try {
        // Gọi API để thay đổi vai trò user trên server
        await updateUserRole(userToChangeRole._id, selectedRole);

        // Đóng dialog
        setRoleDialogOpen(false);
        setUserToChangeRole(null);
        setSelectedRole("");
        setDropdownOpen(false);

        // Hiển thị thông báo thành công
        toast.success(`User "${userToChangeRole.username}" role has been updated successfully!`);

        // Tải lại danh sách users từ server
        fetchUsers();
      } catch (err) {
        console.error("Error updating user role:", err);
        toast.error(err.response?.data?.message || "Failed to update user role. Please try again.");
      }
    }
  };

  const handleCancelRoleChange = () => {
    setRoleDialogOpen(false);
    setUserToChangeRole(null);
    setSelectedRole("");
    setDropdownOpen(false);
  };

  const roles = [
    { value: "user", label: "User", icon: User },
    { value: "admin", label: "Admin", icon: Shield },
  ];

  return (
    <div>
      <Usermanagement
        listUsers={listUsers}
        handleOpenDelete={handleOpenDelete}
        handleOpenRoleDialog={handleOpenRoleDialog}
      />

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]" showCloseButton={true}>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-red-600">
              Confirm delete "{userToDelete?.username}"
            </DialogTitle>
            <DialogDescription className="text-gray-600 pt-2">
              This action cannot be undone. Are you sure you want to delete?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={handleCancelDelete}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              className="px-6 bg-red-600 hover:bg-red-700"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Role Change Dialog */}
      <Dialog open={roleDialogOpen} onOpenChange={setRoleDialogOpen}>
        <DialogContent className="sm:max-w-[500px]" showCloseButton={true}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              Change User Role
            </DialogTitle>
            <DialogDescription className="text-gray-600 pt-2">
              Select the new role for this user. This action will take effect
              immediately.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <label className="text-sm font-semibold text-gray-900 mb-2 block">
              Select Role
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5044E5] focus:border-transparent transition-all"
              >
                <div className="flex items-center gap-2">
                  {selectedRole === "user" ? (
                    <User size={18} className="text-gray-600" />
                  ) : (
                    <Shield size={18} className="text-yellow-600" />
                  )}
                  <span className="text-gray-900 capitalize">
                    {selectedRole || "Select role"}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-gray-500 transition-transform ${dropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  <div className="py-1">
                    <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                      Available Roles
                    </p>
                    {roles.map((role) => {
                      const Icon = role.icon;
                      const isSelected = selectedRole === role.value;
                      return (
                        <button
                          key={role.value}
                          onClick={() => {
                            setSelectedRole(role.value);
                            setDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors ${isSelected ? "bg-blue-50" : ""
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={18}
                              className={
                                role.value === "admin"
                                  ? "text-yellow-600"
                                  : "text-gray-600"
                              }
                            />
                            <span className="text-gray-900 font-medium">
                              {role.label}
                            </span>
                          </div>
                          {isSelected && (
                            <Check size={18} className="text-[#5044E5]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={handleCancelRoleChange}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveRoleChange}
              className="px-6 bg-[#5044E5] hover:bg-[#4039C8] text-white"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserManagement;
