import { USER_ROLE } from "@/constants/role";
import { DrawerItem, TUserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import RateReviewIcon from "@mui/icons-material/RateReview";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import MedicationIcon from "@mui/icons-material/Medication";
import HistoryIcon from "@mui/icons-material/History";

export const drawerItems = (role: TUserRole) => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashborad",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashborad",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: EngineeringIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: PersonIcon,
        },
        {
          title: "Schedule",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: RateReviewIcon,
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashborad",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedule",
          path: `${role}/schedule`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: EngineeringIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonthIcon,
        }
      );
      break;

    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: DashboardIcon,
        },
        {
          title: "Prescription",
          path: `${role}/prescription`,
          icon: MedicationIcon,
        },
        {
          title: "Payement History",
          path: `${role}/payment-history`,
          icon: HistoryIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
