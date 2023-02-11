import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [age, setAge] = useState(selectedEmployee.age);
    const [department, setDepartment] = useState(selectedEmployee.department);
    const [bloodGrp, setBloodGrp] = useState(selectedEmployee.bloodGrp);
    const [address, setAddress] = useState(selectedEmployee.address);
    const [number, setNumber] = useState(selectedEmployee.number);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !age || !department || !bloodGrp || !address || !number) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            age,
            department,
            bloodGrp,
            address,
            number
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="text"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <label htmlFor="department">Department</label>
                <input
                    id="department"
                    type="text"
                    name="department"
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                /> 
                <label htmlFor="blood-group">Blood Group</label>
                <input
                    id="blood-group"
                    type="text"
                    name="blood-group"
                    value={bloodGrp}
                    onChange={e => setBloodGrp(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="number">Contact Number</label>
                <input
                    id="number"
                    type="text"
                    name="number"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit