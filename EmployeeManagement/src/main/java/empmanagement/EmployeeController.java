package empmanagement;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    Logger logger = LoggerFactory.getLogger(EmployeeController.class);
    List<Employee> employees;

    public EmployeeController()
    {
        employees = new ArrayList<Employee>();
        employees.add(new Employee(1,"Mark","Manager",100000));
        employees.add(new Employee(2,"Stacy","Associate",10000));
//{"employeeId":"1C","name":"Jim","designation":"Associate","salary":50000.0}
    }


    @RequestMapping(value="/employees",method = RequestMethod.GET)
    public Iterable<Employee> getEmployees()
    {
        logger.info("--------Get employees--------");
        return employeeRepository.findAll();
        //return employees;
    }

    @RequestMapping(value = "/employees",method = RequestMethod.POST)
    public Employee addEmployee(@RequestBody Employee employee)
    {
        logger.info("--------Add employee--------");
        //employees.add(employee);
        employeeRepository.save(employee);
        return employee;
    }

    @RequestMapping(value="/employees/{empid}",method = RequestMethod.GET)
    public Optional<Employee> getEmployee(@PathVariable(value = "empid") Integer empId)
    {
        return employeeRepository.findById(empId);
        /*Employee employee = null;

        for (Employee currentEmployee:employees)
        {
            if(currentEmployee.employeeId.equals(empId))
            {
                employee=currentEmployee;
            }
        }

        return employee;*/
    }

    @RequestMapping(value="/employees/{empid}",method = RequestMethod.POST)
    public Employee updateEmployee(@PathVariable(value="empid") String empId,@RequestBody Employee employee)
    {
        return employeeRepository.save(employee);
        /*for (Employee currentEmployee:employees)
        {
            if(currentEmployee.employeeId.equals(empId))
            {
                employees.set(employees.indexOf(currentEmployee),employee);
            }
        }*/
    }

    @RequestMapping(value="/employees/{empid}",method = RequestMethod.DELETE)
    public void deleteEmployee(@PathVariable(value="empid") Integer empId)
    {
        employeeRepository.deleteById(empId);
        /*for (Employee currentEmployee:employees)
        {
            if(currentEmployee.employeeId.equals(empId))
            {
                employees.remove(currentEmployee);
                break;
            }
        }*/
    }
}
