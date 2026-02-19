import { useState } from 'react';
import { Box } from '@mui/material';
import { DashboardScreen } from './screens/DashboardScreen';
import { UserListScreen } from './screens/UserListScreen';
import { UserFormScreen } from './screens/UserFormScreen';
import { UserDetailScreen } from './screens/UserDetailScreen';

export type ManagementStep =
    | 'dashboard'
    | 'user-list'
    | 'user-form'
    | 'user-detail';

interface ManagementContainerProps {
    onLogout: () => void;
}

const DUMMY_USERS = [
    { id: '1', name: 'Ylona Angour', email: 'ylona.angour@gmail.com', role: 'Administrateur', robotsCount: 2, initial: 'Y' },
    { id: '2', name: 'Emmanuel Moulin', email: 'emmanuel.moulin@gmail.com', role: 'Responsable', robotsCount: 1, initial: 'E' },
    { id: '3', name: 'Mathieu Chavanel', email: 'mathieu.chavanel@gmail.com', role: 'Utilisateur', robotsCount: 2, initial: 'M' },
    { id: '4', name: 'Thomas Dupont', email: 'thomas.dupont@gmail.com', role: 'Responsable', robotsCount: 1, initial: 'T' },
];

export const ManagementContainer = ({ onLogout }: ManagementContainerProps) => {
    const [history, setHistory] = useState<ManagementStep[]>(['dashboard']);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

    const currentStep = history[history.length - 1];

    const goTo = (step: ManagementStep) => {
        setHistory(prev => [...prev, step]);
    };

    const goBack = () => {
        if (history.length > 1) {
            setHistory(prev => prev.slice(0, -1));
        }
    };

    const handleViewUser = (userId: string) => {
        setSelectedUserId(userId);
        goTo('user-detail');
    };

    const selectedUser = DUMMY_USERS.find(u => u.id === selectedUserId) || DUMMY_USERS[0];

    const renderStep = () => {
        switch (currentStep) {
            case 'dashboard':
                return (
                    <DashboardScreen
                        userName="Thomas"
                        orgName="Wedding"
                        onManageUsers={() => goTo('user-list')}
                        onManageRobots={() => console.log('Robots')}
                        onManageSessions={() => console.log('Sessions')}
                        onLogout={onLogout}
                    />
                );
            case 'user-list':
                return (
                    <UserListScreen
                        users={DUMMY_USERS}
                        onAddUser={() => goTo('user-form')}
                        onViewUser={handleViewUser}
                    />
                );
            case 'user-form':
                return (
                    <UserFormScreen
                        onSave={() => goBack()}
                        onBack={goBack}
                    />
                );
            case 'user-detail':
                return (
                    <UserDetailScreen
                        user={selectedUser}
                        onEdit={() => console.log('Edit')}
                        onDelete={() => goBack()}
                        onBack={goBack}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'var(--color-accent-light)' }}>
            {renderStep()}
        </Box>
    );
};
