import { useState } from 'react';
import { Box } from '@mui/material';
import { DashboardScreen } from './DashboardScreen';
import { UserListScreen } from './UserListScreen';
import { UserFormScreen } from './UserFormScreen';
import { UserDetailScreen } from './UserDetailScreen';
import { RobotListScreen } from './RobotListScreen';
import { RobotDetailScreen } from './RobotDetailScreen';
import { OnboardingContainer } from '../Onboarding/OnboardingContainer';
import { SessionListScreen } from './SessionListScreen';
import type { Session } from './SessionListScreen';
import { SessionDetailScreen } from './SessionDetailScreen';
import { SessionFormScreen } from './SessionFormScreen';

export type ManagementView =
    | 'dashboard'
    | 'users'
    | 'user-form'
    | 'user-detail'
    | 'robots'
    | 'robot-detail'
    | 'add-robot'
    | 'sessions'
    | 'session-detail'
    | 'session-form';

interface ManagementContainerProps {
    onLogout: () => void;
}

const DUMMY_USERS = [
    { id: '1', name: 'Ylona Angour', email: 'ylona.angour@gmail.com', role: 'Administrateur', robotsCount: 2, initial: 'Y' },
    { id: '2', name: 'Emmanuel Moulin', email: 'emmanuel.moulin@gmail.com', role: 'Responsable', robotsCount: 1, initial: 'E' },
    { id: '3', name: 'Mathieu Chavanel', email: 'mathieu.chavanel@gmail.com', role: 'Utilisateur', robotsCount: 2, initial: 'M' },
    { id: '4', name: 'Thomas Dupont', email: 'thomas.dupont@gmail.com', role: 'Responsable', robotsCount: 1, initial: 'T' },
];

const DUMMY_ROBOTS = [
    { id: '1', name: 'Beam-Wedding-01', model: 'Beam Standard', status: 'En ligne' as const, battery: 85, wifi: 'Wedding-Event-5GHz', lastConnected: 'Aujourd\'hui à 14:30' },
    { id: '2', name: 'Beam-Wedding-02', model: 'Beam Pro', status: 'En session' as const, battery: 42, wifi: 'Wedding-Event-5GHz', lastConnected: 'Hier à 18:45' },
    { id: '3', name: 'Robot-Reception', model: 'Beam Standard', status: 'Hors ligne' as const, battery: 10, wifi: 'Wedding-Kitchen', lastConnected: 'Il y a 3 jours' },
];

const DUMMY_SESSIONS: Session[] = [
    {
        id: '1',
        robotName: 'Beam-Wedding-01',
        responsibleUser: 'Ylona Angour',
        email: 'invitation@client.com',
        startDate: '2024-03-20',
        endDate: '2024-03-21',
        status: 'Ouverte',
        location: { lat: 45.7640, lng: 4.8357, address: 'Place Bellecour, Lyon' },
        robotId: '1'
    },
    {
        id: '2',
        robotName: 'Beam-Wedding-02',
        responsibleUser: 'Emmanuel Moulin',
        email: 'guest@event.com',
        startDate: '2024-03-22',
        endDate: '2024-03-22',
        status: 'Programmée',
        location: { lat: 48.8566, lng: 2.3522, address: 'Tour Eiffel, Paris' },
        robotId: '2'
    },
];

export const ManagementContainer = ({ onLogout }: ManagementContainerProps) => {
    const [view, setView] = useState<ManagementView>('dashboard');
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [selectedRobotId, setSelectedRobotId] = useState<string | null>(null);
    const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);

    const selectedUser = DUMMY_USERS.find(u => u.id === selectedUserId) || DUMMY_USERS[0];
    const selectedRobot = DUMMY_ROBOTS.find(r => r.id === selectedRobotId) || DUMMY_ROBOTS[0];
    const selectedSession = DUMMY_SESSIONS.find(s => s.id === selectedSessionId) || DUMMY_SESSIONS[0];

    const handleViewUser = (userId: string) => {
        setSelectedUserId(userId);
        setView('user-detail');
    };

    const handleViewRobot = (robotId: string) => {
        setSelectedRobotId(robotId);
        setView('robot-detail');
    };

    const handleViewSession = (sessionId: string) => {
        setSelectedSessionId(sessionId);
        setView('session-detail');
    };

    const renderView = () => {
        switch (view) {
            case 'dashboard':
                return (
                    <DashboardScreen
                        userName="Thomas"
                        orgName="Wedding"
                        onManageUsers={() => setView('users')}
                        onManageRobots={() => setView('robots')}
                        onManageSessions={() => setView('sessions')}
                        onLogout={onLogout}
                    />
                );
            case 'users':
                return (
                    <UserListScreen
                        users={DUMMY_USERS}
                        onAddUser={() => setView('user-form')}
                        onViewUser={handleViewUser}
                        onBack={() => setView('dashboard')}
                    />
                );
            case 'user-form':
                return (
                    <UserFormScreen
                        onSave={() => setView('users')}
                        onBack={() => setView('users')}
                    />
                );
            case 'user-detail':
                return (
                    <UserDetailScreen
                        user={selectedUser}
                        onDelete={() => setView('users')}
                        onBack={() => setView('users')}
                    />
                );
            case 'robots':
                return (
                    <RobotListScreen
                        robots={DUMMY_ROBOTS}
                        onAddRobot={() => setView('add-robot')}
                        onViewRobot={handleViewRobot}
                        onBack={() => setView('dashboard')}
                    />
                );
            case 'robot-detail':
                return (
                    <RobotDetailScreen
                        robot={selectedRobot}
                        onDelete={() => setView('robots')}
                        onBack={() => setView('robots')}
                    />
                );
            case 'add-robot':
                return (
                    <OnboardingContainer
                        onFinish={() => setView('robots')}
                        onBack={() => setView('robots')}
                        isManagement={true}
                    />
                );
            case 'sessions':
                return (
                    <SessionListScreen
                        sessions={DUMMY_SESSIONS}
                        onAddSession={() => setView('session-form')}
                        onViewSession={handleViewSession}
                        onBack={() => setView('dashboard')}
                    />
                );
            case 'session-detail':
                return (
                    <SessionDetailScreen
                        session={selectedSession}
                        onEndSession={() => setView('sessions')}
                        onBack={() => setView('sessions')}
                    />
                );
            case 'session-form':
                return (
                    <SessionFormScreen
                        onSave={() => setView('sessions')}
                        onBack={() => setView('sessions')}
                        robots={DUMMY_ROBOTS}
                        users={DUMMY_USERS}
                    />
                );
            default: return null;
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'var(--color-accent-light)' }}>
            {renderView()}
        </Box>
    );
};
