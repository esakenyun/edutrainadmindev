import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, createFilterOptions } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { handleAddCategory, handleFetchCategoryData } from "@/helpers/categoryHelper";

const filter = createFilterOptions();

export default function InputCategoryCreatable({ selectedCategories, onSelectCategories }) {
  const [value, setValue] = useState(selectedCategories || null);
  const [open, toggleOpen] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setDialogValue({
      name: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = useState({
    name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const newCategory = { name: dialogValue.name };

    const response = await handleAddCategory(newCategory);
    if (response.status === 201) {
      toast.success("Category Added Successfully");
      setValue(newCategory);
      setCategoryName((prev) => [...prev, newCategory]);
      onSelectCategories(newCategory);
    } else if (response.error) {
      toast.error(response.message);
    }
    setLoading(false);
    handleClose();
  };

  const fetchAllCategory = async () => {
    const response = await handleFetchCategoryData();
    setCategoryName(response);
    console.log(response);
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  useEffect(() => {
    setValue(selectedCategories);
  }, [selectedCategories]);

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                name: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
            onSelectCategories(newValue || { name: "" });
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={categoryName}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => (
          <li {...props} key={option.name}>
            {option.name}
          </li>
        )}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="Category"
            fullWidth
            margin="normal"
            size="small"
            className="rounded-md"
            sx={{
              backgroundColor: "white",

              "& .MuiInputLabel-root.Mui-focused": {
                color: "grey", // Change to the color you want for the placeholder when active
              },
            }}
          />
        )}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new Category</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="Name"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
