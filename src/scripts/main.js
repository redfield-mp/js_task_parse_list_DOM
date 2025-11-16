'use strict';

// write code here
const getEmployees = (listElement) => {
  return [...listElement].map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

const sortList = (list) => {
  const listElement = document.getElementsByTagName('ul')[0];
  const employees = getEmployees(listElement.children);
  const sortedEmployees = employees.sort(
    (a, b) =>
      Number(b.salary.slice(1).replace(',', '')) -
      Number(a.salary.slice(1).replace(',', '')),
  );

  listElement.innerHTML = sortedEmployees
    .map(
      (employee) =>
        `<li data-salary="${employee.salary}" data-position="${employee.position}" data-age="${employee.age}">${employee.name}</li>`,
    )
    .join('');
};

sortList('ul');
